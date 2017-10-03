# Text File Reader
[Introduction](#introduction) | [Technologies](#technologies) | [Installation](#installation) | [Working Overview](#screenshots) |

## Introduction
This is a text file reader written in JavaScript.
- User can enter locally saved .txt file to browser
- Text file is displayed on screen for user
- User can then evaluate the text file.
- Evaluation checks each type of word, how often it occurs and if that occurrence is a prime number

## User stories:

```
As a user,
So that I can load my text files,
I want to be able to load my text files into a browser.

As a user,
So that I don't upload a file that isn't in a .txt format,
I want to be told it is an invalid format.

As a user,
So that I can view my text file,
I want to be able to see my file displayed in my browser.

As a user,
So that I can evaluate my text file,
I want to be able to see which words occur in my text file.

As a user,
So that I can evaluate my text file,
I want to be able to count how many times that word occurs.

As a user,
So that I can evaluate my text file,
I want to be able to see if that occurrence is a Prime Number.

```

## Technologies:

Built with:
- Javascript
- Jasmine
- Html
- CSS

## Installation

- clone this repository
- in project root directory run  ```open index.html``` in the command line
- this should prompt you to your preferred browser: the url should look similar to: ```file:///Users/johnashton/Desktop/Projects/JS/file_text_reader/index.html```  Depending on your PWD.
- run tests with ```open SpecRunner.html``` in the command line
- this should prompt you to your preferred browser: the url should look similar to: ```file:///Users/johnashton/Desktop/Projects/JS/file_text_reader/SpecRunner.html?spec=```  Depending on your PWD.

## Usage

- Download and save a text file to use locally.
- Load index.html page into browser ```open index.html ```
- Click "Choose file" button.
- Search locally hosted text files and choose which to upload.
- Press button "Evaluate text" to have the text file evaluated.
- **NOTE** Large text files do take awhile to evaluate but do evaluate so be patient and wait. Best tested on small text files to see functionality.

## Testing
## Tests ran in SpecRunner.html written in Jasmine.
![Imgur](https://imgur.com/EMbmmoo.png)

## Screenshots
## Opening the index.html page renders the interface.

![Imgur](https://imgur.com/OdJb3Mz.png)

## Clicking the 'choose file' button will prompt user to enter a locally stored file.
![Imgur](https://imgur.com/ejvdb1N.png)

## Choosing a file that is not a text file will prompt user with the error File not supported!.
![Imgur](https://imgur.com/YmtlNTj.png)

## Choosing a text file will have it rendered on the page for the user to view.
![Imgur](https://imgur.com/t5IiRAs.png)

## After clicking the "Evaluate text" button it displays list of words used, their frequency and if frequency is prime number

![Imgur](https://imgur.com/EOJhT8e.png)

## Screenshot to show end of word list for Railway children when text file loaded and evaluated.

![Imgur](https://imgur.com/wdgts25.png)

## Retrospective

- Built project in JavaScript but would like to look into taking the project further with other technologies such as React and re-build it.
- For large files the evaluation of text takes a long time.  Would like to look into making the project run faster.
- Fully functioning project which I'm happy with.
