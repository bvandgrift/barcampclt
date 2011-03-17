# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

include Nanoc3::Helpers::Blogging
include Nanoc3::Helpers::Breadcrumbs
include Nanoc3::Helpers::Capturing
include Nanoc3::Helpers::Filtering
include Nanoc3::Helpers::HTMLEscape
include Nanoc3::Helpers::LinkTo
include Nanoc3::Helpers::Rendering
include Nanoc3::Helpers::Tagging
include Nanoc3::Helpers::Text
include Nanoc3::Helpers::XMLSitemap

# This is just some syntactical sugar that we use later
# Don't worry about it for now.
class Nanoc3::Item
  def content(opts = {})
    opts[:rep] ||= :default
    opts[:snapshot] ||= :last
    reps.find { |r| r.name == opts[:rep] }.content_at_snapshot(opts[:snapshot])
  end

  def name
    identifier.split("/").last 
  end
end

# Copy /pres/ directory to /output/pres/ and exclude /_scss/ directory and sass files
def copy_pres
  FileUtils.cp_r 'assets/css/.', 'output/assets/css/'
  FileUtils.cp_r 'assets/js/.', 'output/assets/js/'
end