# Pokémon Pokédex

## Viewing the Pokédex
The site has three main pages:
1. `/` The index of the site. It will display 12 Pokémon per page and can be navigated using the pagination at the bottom of the page
2. `/pokemon/:name` Details for a Pokémon are displyed on this page. If you click the type badges you'll navigate to the last page type.
3. `type/:type_name` A page that will display all the Pokémon of that type. This page is helpful when want to find a Pokémon but only know the type.

### Accessing the public site

[View Pokédex](https://jl-pokedex-takehome.netlify.app)
[Github Repo](https://github.com/joshlaidlaw/Pokedex)

### Build & Serve instructions for Local

1. Open your terminal application of choice
1. Install dependencies `npm i`
1. Run application:` npm run dev`
1. The url of the site will be displayed in your terminal

### Build & Serve instructions for Docker

To build the docker image run:

`docker build . -f .Dockerfile -t pokedex`

To serve the iamge run:

`docker run -d -p 8080:80 pokedex`

The application will be available at `http://localhost:8000`

## Notes & Comments

State management: This application is state is not too complex. If it was to get any more complicated it would be worth while to setup zustand or redux to manage the state. Another improvement that could be made would be to update the URL with the state of the page and query as the User is using the pagination and search

Search: The API does not support fuzzy search for the name of the Pokemon. The search could be implemented as a filter on the results but would require requesting all 1000+ Pokemon from the API. You'd then want to build out a data structure on the client. This grows the scope and I thought it was outside of the assignment.

Components: There are a few places (mainly pagination) that could be pulled out into their own components but would require a bit of prop drilling with the current implementation.

---

## AgencyAnalytics Frontend React Challenge!

Below are the pieces of technology that we have added into this repository for you with a little description.

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces. The whole app will be built on this, feel free to check out the docs!

[Vite](https://vite.dev/) is a popular build engine that is a standard these days and known for fast setup and build times.

[PokeApi](https://pokeapi.co/) this is the definitive API for all things Pokemon. You will be using this for all of our data during this challenge. So please dig in and give it a test, it doesnt require an API key so you can run api calls directly in browser to test out the responses.

Mockup is located in the /mockup folder

---

### The challenge will have you build a fully functioning react application that is designed to be a a bit of a "pokedex"

There are two pages:

## Page 1

The home page. As the mockup suggests there are all of the following on the home page:

- A search bar where you can search for Pokemon
- The home page is paginated
- The layout is quite simple as far as showing the pokemon and their images.
- Since this page is the home of the application it should also be performant

## Page 2

The second page is a detail screen for the Pokemon, on this page we just show details about each pokemon. This page is quite simple implement it based on the mockup!

## Page 3

Page three is not covered in the mockups but if you're feeling a bit extra we leave this page up to you if you'd like to add your own flare to the pokedex add this page and give us a small write up about why you added it and why it adds user value to your application. An opportunity to show us a bit of everything, development capabilities, design flare and also your product sense.

### What to expect next

Be prepared and able to answer tough questions about your pokedex, we will expect you to know it inside and out, because you built it after all!
