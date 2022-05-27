# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Acceptance Criteria:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshots

| Desktop                                                                                                                                                                    | Mobile                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="1280" alt="Screen Shot 2022-05-27 at 12 45 43 PM" src="https://user-images.githubusercontent.com/61766455/170780105-7ae34d33-aff7-4953-9a72-905c97323d10.png"> | <img width="195" alt="Screen Shot 2022-05-27 at 12 46 38 PM" src="https://user-images.githubusercontent.com/61766455/170780117-e0d4d4af-7507-4d41-8364-e1f755a3581e.png"> |

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-uses-sass-and-ghpages-qJCRveRVM1)
- Live Site URL: [Live Site](https://chriskorsak.github.io/base-apparel-coming-soon/)

## My process

### Built with

- HTML5
- SASS
- JavaScript
- Mobile-first workflow

### What I learned

I used a couple layout methods in this project that helped with overlapping components. First, I used CSS grid to overlap the form input and the submit button. And second, I used the layout method where you set a parent element as `position: relative`, and the child as `position: absolute` in order to absolutely position the error icon within the area of the parent. Both work well and end up getting the job done, but my preference going forward is to probably use CSS grid because it's more intuitive.

## Author

- Portfolio - [Chris Korsak](https://www.chriskorsak.net)
- Frontend Mentor - [@chriskorsak](https://www.frontendmentor.io/profile/chriskorsak)
