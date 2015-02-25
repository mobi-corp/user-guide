# This is the user support manual for all mobi products and related items.

## Getting started

You will need Ruby **v 1.9.3 or v 2.x** or later.  
Install the [Jekyll](http://jekyllrb.com/docs/quickstart/) gem by navigating 
to the **mobi-support-guide** root directory in your terminal and running the install command:

> **$ cd /your-parent-directory/mobi-support-guide**  
> **$ gem install jekyll**

Now to run the server locally from your terminal, run: 

> **$ jekyll serve**

In your browser, go to [http://localhost:4000](http://localhost:4000) to view the app

### Committing, pushing, and pulling

When you've made changes, you need to **add** the files you've changed or **checkout** the ones you don't want to 
commit the changes for, **commit** the changes with your update message, **pull** from Stash to make sure you have 
the latest changes, and then **push** the changes to Stash.

You can download the GitHub app for [Windows](https://windows.github.com) or [Mac](https://mac.github.com) or the 
Atlassian app [SourceTree](http://www.sourcetreeapp.com) to manage the project, or you can use the terminal.

If you're using the terminal, run from the root directory:

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