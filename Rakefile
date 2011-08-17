require 'nanoc3/tasks'

# begin
#   # Try to require the preresolved locked set of gems.
#   require File.expand_path('../.bundle/environment', __FILE__)
#   rescue LoadError
#   # Fall back on doing an unlocked resolve at runtime.
#   require "rubygems"
#   require "bundler"
#   Bundler.setup
# end

require 'nanoc3/tasks'

require 'fileutils'
%w{yaml}.each{|lib| require lib}

config  = YAML.load(File.open("config.yaml"))

def path_tree(path,to_copy=[])
  tree = []
  raise "WHUT? Path empty!" if path.nil? || path.empty?
  Dir.glob("#{path}/*").each do |path|
    if File.directory?(path)
      tree << path_tree(path)
    else
      tree << path 
      path_tree(path)
    end 
  end 
  tree.flatten
end

desc "Watches and automatically compiles the site"
task :auto => :compile do
  sh "nanoc auto"
end

desc "Compile SCSS for main files & widgets into CSS"
task :compile_css do
  puts "Compliling SCSS into CSS"
  # compile the sites main CSS
  sh "compass compile --output-style compressed --force"
  # compiles the CSS for past site versions
  sh "compass compile --sass-dir assets/_iv/scss/ --css-dir assets/_iv/css/ --output-style compressed --force"
end

task :copy_assets => [:compile_css] do
  output_assets_dir = [config["output_dir"],config["assets_dir"]].join("/")
  
  puts "Copying assets from '/#{config['assets_dir']}' to '/#{config['output_assets_dir']}'"
  
  # copies files from /assets to /output/assets
  path_tree(config['assets_dir']).each do |asset|
    target = asset.gsub(/#{config['assets_dir']}\//, '')
    
    from  = asset
    to    = [config["output_dir"],config["assets_dir"],target].join("/")
    
    if !File.exist?(File.dirname(to))
      FileUtils.mkdir_p(File.dirname(to))
    end
    
    if !File.exist?(to) || !FileUtils.compare_file(from,to)
      puts "Adding asset: #{to}"
      FileUtils.cp from, to
    end 
  end
  
  # removes any misc .scss and it's _scss dir along with any .rb files
  puts "Cleaning up any extra .scss or .rb files that are in /#{output_assets_dir}"
  FileUtils.remove_dir "#{output_assets_dir}/scss"
end

desc "Compile static files"
task :compile do
  puts "Compiling content."
  sh "nanoc compile"
end

task :sync do
  puts "Syncing site to remote home directory"
  sh "rsync -rcv --delete output/ barcamp@startcharlotte:website"
end

task :build => [:compile_css, :compile]

task :deploy => [:build, :sync]

# task :deploy => [:build, :sync]
# task :deploy => [:compile, :sync]

task :default => :deploy