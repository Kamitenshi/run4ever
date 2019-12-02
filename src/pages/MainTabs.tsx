import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { calendar, contacts, map, informationCircle } from 'ionicons/icons';
import SchedulePage from './SchedulePage';
import SpeakerList from './SpeakerList';
import SpeakerDetail from './SpeakerDetail';
import SessionDetail from './SessionDetail';
import Map from './MapView';
import About from './About';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        <Route path="/tabs/home" component={SchedulePage} exact={true} />
        <Route path="/tabs/races" component={SpeakerList} exact={true} />
        <Route path="/tabs/races/:id" component={SpeakerDetail} exact={true} />
        {/* <Route path="/tabs/schedule/:id" component={SessionDetail} /> */}
        {/* <Route path="/tabs/speakers/sessions/:id" component={SessionDetail} /> */}
        {/* <Route path="/tabs/map" component={Map} exact={true} /> */}
        <Route path="/tabs/about" component={About} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/tabs/home">
          <IonIcon icon={calendar} />
          <IonLabel>Accueil</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/tabs/races">
          <IonIcon icon={contacts} />
          <IonLabel>Mes courses</IonLabel>
        </IonTabButton>
        {/* <IonTabButton tab="map" href="/tabs/map">
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton> */}
        <IonTabButton tab="about" href="/tabs/about">
          <IonIcon icon={informationCircle} />
          <IonLabel>À propos</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;