# Lorem Ipsum helper to generate fake content while waiting on approved copy decks
# <%= lorem_ipsum %>  (Generates a chunk of it as raw text with \n line breaks)
# <%= lorem_ipsum(25) %>  (Generates approximate number of bytes of it as raw text with \n line breaks)
# <%= lorem_ipsum(25, "<br/>") %>   (Generates approximate number of bytes of it as raw text with \n line breaks converted to <br/>)

# Generates some Lorem Ipsum from a static String.
class LoremIpsum

  # Generates an amount of Lorem Ipsum, to approximately the number of characters that are
  # requested.
  def self.generate_lorem_ipsum(approx_characters)
    @@LOREM[0..approx_characters]
  end

private 
  @@LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet mi sed mi mattis suscipit. Integer lacinia lacinia erat. Etiam a arcu. Quisque et augue eget nisi luctus laoreet. Vestibulum sit amet quam eu nibh vehicula elementum. Vivamus urna pede, scelerisque eu, hendrerit euismod, vehicula vel, dolor. \n\
        \n\
        Quisque blandit. Nulla eget odio eu nisl sollicitudin tempus. Donec libero. Maecenas dui elit, venenatis eget, congue vel, semper sed, est. Nunc felis.\n\
        \n\
        Donec ante. Nullam rutrum, nibh eu tempor egestas, diam pede luctus ante, vitae fringilla ligula pede at turpis. Morbi sed metus quis odio luctus lacinia. In hac habitasse platea dictumst. Ut erat ipsum, faucibus sit amet, interdum in, tempor rutrum, metus.\n\
        \n\
        Maecenas ullamcorper leo et libero. Proin nec eros. In id lorem eu tellus tempus bibendum. Curabitur eu odio. Curabitur fermentum sem ut arcu. Ut eget leo ultricies mauris malesuada sollicitudin. Vivamus fringilla auctor nisl. Curabitur venenatis. Duis tempus, nunc quis convallis posuere, eros nibh lacinia nisl, non molestie enim lorem at nisi. Aenean dui. Cras elementum felis sit amet tellus consequat vehicula. Mauris rhoncus. Donec posuere mauris adipiscing tortor. Curabitur sagittis leo in magna.\n\
        \n\
        Cras quis libero ut urna pulvinar mattis. Vestibulum suscipit gravida nulla. Proin condimentum sapien ut augue. Cras turpis ligula, pharetra in, malesuada at, eleifend vel, pede. Phasellus turpis nisi, placerat in, semper sed, tincidunt a, tortor. Vivamus est nibh, mattis vitae, aliquet non, dignissim at, velit. Etiam elementum odio non erat. Donec varius felis sed nisl. Vestibulum imperdiet. Donec viverra pede ac tortor. "
end

module LoremIpsumHelper
  
  # Generates _lorem ipsum_ text, approximately the quantity requested.
  # The embedded carriage returns can be replaced with the +cr_to+ string
  # if desired.  
  # == Example
  # To generate a few paragraphs:
  # <tt><%= lorem_ipsum %></tt>
  # 
  # To generate a few words, wrapped in a span:
  # <tt><span><%= lorem_ipsum(20) %></span></tt>
  # 
  # To generate a few paragraphs, with <p> tags in there:
  # <tt><p><%= lorem_ipsum(-1, '</p><p>') %></p></tt>
  def lorem_ipsum(quantity = -1, cr_to = nil)
    lipsum = LoremIpsum.generate_lorem_ipsum(quantity)
    if cr_to
      "#{lipsum.gsub(/\n/,cr_to)}"
    else
      lipsum
    end
  end
  
end

# Copy /pres/ directory to /output/pres/ and exclude /_scss/ directory and sass files
def copy_pres
  FileUtils.cp_r 'assets/.', 'output/assets/'
  # removes the main _scss directory
  #FileUtils.rm Dir.glob('output/assets/scss/*.scss')
  #FileUtils.rmdir 'output/assets/scss/'
  #FileUtils.rm Dir.glob('output/assets/iv/scss/*.scss')
  #FileUtils.rmdir 'output/assets/iv/scss/'
end

# Gets the context of a page from it's yaml file. It'll be used to determine
# the context of a page and apply a class to its parent in the left nav
# so we can expand it out by default if they are in that section of demo content.
def welcome_context
  if @item[:context] == 'welcome'
    {:class => 'open'}
  else
    ''
  end
end
def dashboard_context
  if @item[:context] == 'dashboard'
    {:class => 'open'}
  else
    ''
  end
end
def applications_context
  if @item[:context] == 'applications'
    {:class => 'open'}
  else
    ''
  end
end
def resources_context
  if @item[:context] == 'resources'
    {:class => 'open'}
  else
    ''
  end
end

# iterates through the pages hash in each yaml file
def pages
  if @item[:pages].nil?
    '(none)'
  else
    @item[:pages]
  end
end