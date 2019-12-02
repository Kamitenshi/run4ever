import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonButton, IonIcon, IonDatetime, IonSelectOption, IonList, IonItem, IonLabel, IonSelect, IonPopover, IonListHeader, IonAvatar } from '@ionic/react';
import './About.scss';
import { calendar, pin, more } from 'ionicons/icons';
import AboutPopover from '../components/AboutPopover';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {

  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState();

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };
  const conferenceDate = '2047-05-17';

  return (
    <IonPage id="about-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>À propos de nous</IonTitle>
          {/* <IonButtons slot="end">
            <IonButton icon-only onClick={presentPopover}>
              <IonIcon slot="icon-only" icon={more}></IonIcon>
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div  className="about-header">
          <img src="assets/img/runner.jpg" alt="ionic logo" />
        </div>
        <div className="about-info">
          <h4 className="ion-padding-start">Run4Ever</h4>

          <IonList lines="none">
            <IonListHeader class="list-header">
              Notre mission
            </IonListHeader>
            <IonItem>
              <p>
              La perte de mobilité est un besoin médical croissant avec le veillissement de la population et le développement de pathologies chroniques. 
              Run4Ever se positionne comme le premier partenaire mondial des spécialistes de la mobilité pour améliorer la marche avec des dispositifs 
              actifs et collecter des données objectives en vie réelle.
              </p>
            </IonItem>
          </IonList>
          <IonList lines="none">
            <IonListHeader class="list-header">
              Notre équipe
            </IonListHeader>
            <IonItem >
              <IonAvatar slot="start">
                <img src="assets/img/runner.jpg"/>
              </IonAvatar>
              <IonLabel>
                <h2>AHMED ALI Amin</h2>
                <h3>CIO</h3>
                <p>Cohérence technologique</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/img/runner.jpg"/>
              </IonAvatar>
              <IonLabel>
                <h2>MENSCHENFREUND Léo</h2>
                <h3>CTO</h3>
                <p>Vision technique du produit  </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/img/runner.jpg"/>
              </IonAvatar>
              <IonLabel>
                <h2>HAYARD Claire</h2>
                <h3>CEO</h3>
                <p>Vision de la stratégie</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/img/runner.jpg"/>
              </IonAvatar>
              <IonLabel>
                <h2>CHABAUD Erwan</h2>
                <h3>CFO</h3>
                <p>Rentabilité du projet</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/img/runner.jpg"/>
              </IonAvatar>
              <IonLabel>
                <h2>SIMARIK Mikaël</h2>
                <h3>CPO</h3>
                <p>Vision produit et communauté</p>
              </IonLabel>
            </IonItem>
          </IonList>


          
        </div>
      </IonContent>
      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} /> 
      </IonPopover>
    </IonPage>
  );
};

export default About;