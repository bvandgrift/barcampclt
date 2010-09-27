require 'nanoc3/tasks'
%w{yaml}.each{|lib| require lib}
# a rake task to copy any css and javascript 
# files over to the webroot output directory

config  = YAML.load(File.open("config.yaml"))

def path_tree(path,to_copy=[])
  tree = []
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
  path_tree(config['asset_dir']).each do |asset|
    # Some vars
    from  = asset
    to    = [config["output_dir"],asset].join("/")
    if !File.exist?(File.dirname(to))
      puts "mkdir -p #{File.dirname(to)}"
      File.makedirs(File.dirname(to))
    end 
    if !File.exist?(to) || !File.compare(from,to)
      puts "cp #{from} #{to}"
      File.copy(from,to)
    end 
  end 
end

task :sync do
  sh "rsync -rcv --delete output_dir/ barcamp@startcharlotte:website"
  #sh "rsync -gprt --partial --exclude='.svn' assets/ output"
end

task :compile do
  sh "nanoc3 co"
end

task :deploy => [:compile, :copy_assets, :sync]

task :default => :deploy
