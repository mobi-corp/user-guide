# This is the user support manual for all mobi products and related items.

## Getting started

###First you will need the project files

1. Visit [mobi's prod-stash repository](http://prod-stash01:7990/projects) and navigate to **mobi-core** and then **mobi-support-guide**.

	Once you're in the **mobi-support-guide repo**, find the button at the top of the page that says **Clone**.	

2. In the clone dropdown, click on the **Download** button to download Atlassian's source control app called **SourceTree**.
3. Once you've downloaded the software and opened it, click on the **Clone** button once again and this time select **Clone**.
	
	This will open the SourceTree app with a new repository bookmark set-up. In this case, my directory automatically says */Users/MyName/mobi-support-guide* but I want it in my mobi directory so I change it and add */Users/Bizacat/__mobi__/mobi-support-guide*.  When done hit the new **clone** button and it should set everything up for you.

4. You can now open up your new mobi-support-guide bookmark in SourceTree when you want to commit and push changes or pull new changes, as well as open the files locally on your computer to edit them. 

### Installing Jekyll
1. Taken from [jekyll.com](www.jekyllrb.com), 

	> *Jekyll is a simple, blog-aware, static site generator that takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server.*

2. There are easy-to-follow instructions on the site here: 

	You will need Ruby **v 1.9.3 or v 2.x** or later.  To check what version of ruby you have, open the command line ([windows](http://windows.microsoft.com/en-us/windows-vista/open-a-command-prompt-window)) or terminal (on a mac go to applications/utilities/terminal) and type
	> ruby -v

	and then enter.
	
3. Next, install the [Jekyll](http://jekyllrb.com/docs/quickstart/) gem by navigating 
to the **mobi-support-guide** root directory in your terminal:

	> **cd your-parent-directory/mobi/mobi-support-guide** 

	and then run the install command:
 
	> **gem install jekyll**

	Now to run the server locally from your terminal, run: 

	> **jekyll serve**

	This lets jekyll run locally on your computer as well as automatically update all of the files you change, including the conversion of markdown files to HTML pages.
	
4. In your browser, go to [http://localhost:4000](http://localhost:4000) to view the app running after you have started the server.  

### Editing the content
1. Find a markdown editor of your choice.  There are many free options for both mac and windows.  Markdown files end in .md *(i.e. myfile.md)*
2. In your local directory, go to your **mobi-support-guide folder**. The folders within the project that you will most likely use the most are:
	- **img** - for all screenshots and other images you want on the site
	- **documents** - for any material you intend on hosting on the site for downloads (such as template excel files and formatted documents)
	- **markdown** - this is where all of the md files live.  When working in these, make sure they are saved or exported as **.md** since some editors will save them as another file type by default

### Committing, pushing, and pulling

1. When you've made changes, you need to **add** the files you've changed and want to ultimately commit and then push to the master branch.

	In **SourceTree**, you will see your changes, additions, and removals in the **Files in the working tree** window. If you click on any one of them, it will show you the original vs the changes you've made (green for additions, red for deletions) in the window on the right.

2. Select all of the files you wish to commit and drag them to the window immediately above them titled **Files staged in the index**.  From here you
 or **checkout** the ones you don't want to 
commit the changes for, **commit** the changes with your update message, **pull** from Stash to make sure you have 
the latest changes, and then **push** the changes to Stash.

You can download the GitHub app for [Windows](https://windows.github.com) or [Mac](https://mac.github.com) or the 
Atlassian app [SourceTree](http://www.sourcetreeapp.com) to manage the project, or you can use the terminal.

If you're using the terminal, run from the project's root directory:

> **$ git add --all**

If you want to omit something:

> **$ git checkout [the file path(s)]**

Once you've added or removed all of your changes:

> **$ git commit -m "yourname: your message about the changes goes here"**

Then, to make sure you're not overriding new changes you haven't pulled yet:

> **$ git pull origin master**

And finally, push:

> **$ git push origin master**

### Troubleshooting:

If attempting to use Adobe Edge Inspect (observed on iPhone 6 iOS 8) to view the app locally, run:

> **$ jekyll serve --host 0.0.0.0**

