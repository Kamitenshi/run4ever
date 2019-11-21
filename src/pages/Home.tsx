import React from 'react';
import './Home.scss';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem, IonIcon, IonLabel, IonButton, IonCardContent, IonChip, IonThumbnail, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';


interface HomeProps { };

const image = "https://media.giphy.com/media/10zxDv7Hv5RF9C/giphy.gif"

const Home: React.FC<HomeProps> = () => {
    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg src={image}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Home;