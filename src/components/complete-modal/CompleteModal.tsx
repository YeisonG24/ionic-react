import React, { useContext } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonText } from '@ionic/react';

import ActivitiesContext, { Activity } from '../../data/activities-context';

interface CompleteModalProps {
    activity: Activity;
    dismissModal: () => void;
}

const CompleteModal: React.FC<CompleteModalProps> = ({ activity, dismissModal }) => {

    const activitiesContext = useContext(ActivitiesContext);

    const confirmCompletion = (activityId: string) => {
        activitiesContext.completeActivity(activityId);
        dismissModal();
    };

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-no-padding'>
                        <IonImg src={activity.imageUrl} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonText>
                            <h2>{activity.title}</h2>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center ion-no-padding'>
                        <IonText color='medium'>
                            <p>Are you sure you want to mark this activity as completed?</p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='clear' onClick={dismissModal}>Cancel</IonButton>
                    </IonCol>
                    <IonCol className='ion-text-center'>
                        <IonButton color='primary' fill='clear' onClick={() => confirmCompletion(activity.id)}>Complete</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    )
}

export default CompleteModal;
