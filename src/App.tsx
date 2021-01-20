import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
    IonItem,
    IonMenuToggle,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, newspaperOutline, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { bodyOutline } from 'ionicons/icons';

import AllActivities from './pages/all-activities/AllActivities';
import AddActivity from './pages/add-activity/AddActivity';
import ActivitiesContextProvider from './data/ActivitiesContextProvider';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonMenu side='start' contentId='scheduleApp'>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Schedule App</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonMenuToggle>
                            <IonItem routerLink='/all-activities'>
                                <IonIcon color='medium' slot='start' icon={bodyOutline} />
                                <IonLabel>All activities</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle>
                            <IonItem routerLink='/add-activity'>
                                <IonIcon color='medium' slot='start' icon={newspaperOutline} />
                                <IonLabel>Add activity</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
            <ActivitiesContextProvider>
                <IonTabs>
                    <IonRouterOutlet id='scheduleApp'>
                        <Route path="/all-activities" component={AllActivities} exact />
                        <Route path="/add-activity" component={AddActivity} exact />
                        <Redirect to="/all-activities" />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/tab1">
                        <IonIcon icon={triangle} />
                        <IonLabel>Tab 1</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/tab2">
                        <IonIcon icon={ellipse} />
                        <IonLabel>Tab 2</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon icon={square} />
                        <IonLabel>Tab 3</IonLabel>
                    </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </ActivitiesContextProvider>
        </IonReactRouter>
    </IonApp>
);

export default App;
