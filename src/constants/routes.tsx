import { calendar, contacts, help, informationCircle, logIn, logOut, map, person, personAdd } from 'ionicons/icons';

export const routes = {
  about: { title: 'À propos', path: '/tabs/about', icon: informationCircle },
  account: { title: 'Account', path: '/account', icon: person },
  // home: { path: '/home'},
  login: { title: 'Se connecter', path: '/login', icon: logIn },
  logout: { title: 'Se déconnecter', path: '/logout', icon: logOut },
  // map: { title: 'Map', path: '/tabs/map', icon: map },
  home: { title: 'Accueil', path: '/tabs/home', icon: calendar },
  signup: { title: 'S\'inscrire', path: '/signup', icon: personAdd },
  races: { title: 'Mes courses', path: '/tabs/races', icon: contacts },
  // support: { title: 'Support', path: '/support', icon: help },
  tabs: { path: '/tabs' },
  // tutorial: { path: '/tutorial' },
};

export const pages = {
  appPages: [
    routes.home,
    routes.races,
    // routes.map,
    routes.about
  ],
  loggedInPages: [
    routes.account,
    // routes.support,
    routes.logout
  ],
  loggedOutPages: [
    routes.login,
    // routes.support,
    routes.signup
  ]
};