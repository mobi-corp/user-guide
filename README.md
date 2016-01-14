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
3. Markdown is a simple way of formatting your writing without any HTML knowledge, but creating a file in an easy-to-convert format for your website. 

	For this document, I used [MWeb Lite](http://www.mweb.im) on a mac since it has a live preview while I type and because it was free, though I probably wouldn't use it as my default editor since it doesn't manage folders and files well. It's all personal taste, however.

	Documentation on using markdown can be found in detail at [Daring Fireball](http://daringfireball.net/projects/markdown/syntax) and many markdown editors have actions to include formatting without having to write it in yourself or at least have extensive documentation to help teach you. 
	
	For more markdown examples, just open up this or any existing file in your markdown editor to better understand how it's written.
	
### Committing, pushing, and pulling

1. When you've made changes, you need to **add** the files you've changed and want to ultimately commit and then push to the master branch.  Changes pushed to the master branch are then able to be pulled by anyone else working on the project from this prod-stash repository.

	In **SourceTree**, you will see your changes, additions, and removals in the **Files in the working tree** window. If you click on any one of them, it will show you the original vs the changes you've made (green for additions, red for deletions) in the window on the right.

2. Select all of the files you wish to commit and drag them to the window immediately above them titled **Files staged in the index**.  If there are any changes you want to back out on and not commit, select those and click *checkout*.  Once you've done all of that, you are now ready to commit.

3. The **commit** button is located near the top of the SourceTree application.  Click this when you are ready to continue and then enter a commit message summarizing the changes you've made for future reference and documentation and then click commit.

4. The next step is to **pull** any other potential changes made by anyone else who has been working on this project so that you don't unintentionally create merge conflicts or override another person's work.  The icon is on the same navigation bar as the commit button.

5. The last step is to **push** your changes, which is next to the pull icon.  Just click ok as the settings should be fine as they are.

Check here for [support](https://answers.atlassian.com) for the Atlassian [SourceTree](http://www.sourcetreeapp.com) app to manage the project. 

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


