require 'nanoc3/tasks'
require 'fileutils'
%w{yaml}.each{|lib| require lib}
# a rake task to copy any css and javascript 
# files over to the webroot output directory

config  = YAML.load(File.open("config.yaml"))

def path_tree(path,to_copy=[])
  tree = []
  raise "WHUT? Path empty!" if path.empty?
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

task :copy_assets do
  puts "Copying assets from '#{config['asset_dir']}'"
  path_tree(config['asset_dir']).each do |asset|
    target = asset.gsub(/#{config['asset_dir']}\//, '')
    # Some vars
    from  = asset
    to    = [config["output_dir"],target].join("/")
    if !File.exist?(File.dirname(to))
      FileUtils.mkdir_p(File.dirname(to))
    end 
    if !File.exist?(to) || !FileUtils.compare_file(from,to)
      puts "File changed or absent: #{to}"
      FileUtils.cp from, to
    end 
  end 
end

task :view do
  sh "nanoc3 auto"
end

task :sync do
  puts "Syncing site to production."
  sh "rsync -rcv --delete output/ barcamp@startcharlotte:website"
end

task :compile do
  puts "Compiling content."
  sh "nanoc3 co"
end

task :build => [:compile, :copy_assets]

task :deploy => [:build, :sync]

task :default => :deploy
