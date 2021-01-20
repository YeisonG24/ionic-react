import React, { useContext, useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import classes from './AllActivities.module.css';
import ActivitiesContext, { Activity } from '../../data/activities-context';
import CompleteModal from '../../components/complete-modal/CompleteModal';
import { checkmarkOutline } from 'ionicons/icons';

const AllActivities: React.FC = () => {

    const activitiesContext = useContext(ActivitiesContext);

    const [activityToComplete, setActivityToComplete] = useState<Activity>();

    const openCompleteModal = (activity: Activity) => {
        setActivityToComplete(activity);
    };

    const closeModal = () => {
        setActivityToComplete(undefined);
    };

    return (
        <React.Fragment>
            <IonModal isOpen={!!activityToComplete} swipeToClose >
                <CompleteModal activity={activityToComplete as Activity} dismissModal={closeModal} />
            </IonModal>

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>All activities</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        {activitiesContext.activities.map(activity => (
                            <IonRow key={activity.id}>
                                <IonCol className='ion-text-center'>
                                    <IonCard>
                                        <IonImg src={activity.imageUrl} alt='activity' />
                                        <IonCardHeader>
                                            <IonCardTitle>{activity.hour}</IonCardTitle>
                                            <IonCardSubtitle>{activity.title}</IonCardSubtitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <IonLabel>{activity.description}</IonLabel>
                                            <IonItem lines='none'>
                                                {!activity.isCompleted ? 
                                                    <IonButton
                                                        className={classes.fullWidth}
                                                        fill='clear'
                                                        onClick={() => openCompleteModal(activity)}
                                                    >
                                                        Complete Activity
                                                    </IonButton>
                                                :
                                                    <IonIcon
                                                        color='success'
                                                        className={classes.fullWidth}
                                                        icon={checkmarkOutline}
                                                    />
                                                }
                                            </IonItem>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        ))}
                    </IonGrid>
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};

export default AllActivities;
