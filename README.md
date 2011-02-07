Introduction
============

    nanoc compiles static html sites from bits, preventing both
    html reuse, and the overhead of a cms.  It is ideal for this
    application.

    For info: [nanoc](http://nanoc.stoneship.org)

Installation
------------

    gem install nanoc3
    gem install bundler
    bundle install

Usage
-----

    # Compile the site:
    rake

    # Compile the site, start a web server and recompile files on demand:
    rake auto
    
    # Compile SASS/Compass
    compass watch


Making Changes
--------------

    The content directory contains the base files from which the
    site is built.  These are pages which will be compiled through
    the layouts and snippets into full pages.  They contain some
    yaml front matter -- 'nav: name' indicates which nav icon
    should be highlighted.  These variables can be expanded, however
    for the moment only 'nav' is used.

    The output directory contains the compiled site, and it the
    directory that's synced by rsync.

    The assets directory contains files which will be copied 
    into the output directory if changes have been made.  They are
    not compiled.

    The layouts directory contains main layouts and snippets to be
    included in other content files.  (navigation, header, footer, etc.)

    nanoc will compile filenames in the content directory (except
    index) into directories in the output directory.  

    content/schedule.html => output/schedule/index.html
    content/something/else.html => output/something/else/index.html

    After changes get made to the content files, build the site, or 
    view the site to verify them before deploying.

    When you get the changes you want, check them into the git repo.

    Viewing the Site Locally
    ------------------------

    Visit your changes at [http://localhost:3000](http://localhost:3000):

        nanoc auto

    OR

        rake view


    Building the Site
    -----------------

    Builds the site and copies the assets into the output directory.

        rake build

    Deploying the Site
    ------------------

    Builds the site and syncs to the deployed installation.

        rake deploy

    License
    -------

    BarCamp Charlotte content is licensed under a Creative Commons Attribution 3.0 License except where otherwise noted.

    Credits
    -------

    Website is powered by [nanoc](http://nanoc.stoneship.org), designed by [Bermon Painter](http://bermonpainter.com), developed and hosted by [Start Charlotte](http://startcharlotte.com).

    Donations
    ---------

    Any donations [through github](http://github.com/bvandgrift/barcampclt) will go toward the hosting of the site, purchased graphics, and the technical meat of BarCamp Charlotte.
