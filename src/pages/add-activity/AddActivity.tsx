import React, { useContext, useRef, useState } from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ActivitiesContext, { ActivityType } from '../../data/activities-context';

const AddActivity: React.FC = () => {

    const history = useHistory();

    const titleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);
    const hourInput = useRef<HTMLIonDatetimeElement>(null);

    const activitiesContext = useContext(ActivitiesContext);

    const [toastMsg, setToastMsg] = useState<string>('');

    const addActivity = () => {
        const title = titleInput.current?.value as string;
        const description = descriptionInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;
        const startDate = new Date(hourInput.current?.value as string);
        const startHour = startDate.getHours() + ':' + startDate.getMinutes();

        if(title && description && activityType && startHour) {
            activitiesContext.addActivity(title, description, startHour, activityType);
            setToastMsg('The activity has been saved');
            history.replace('/all-activities');
        }
    };

    return (
        <React.Fragment>
            <IonToast isOpen={!!toastMsg} message={toastMsg} duration={6000} color='medium' onDidDismiss={() => setToastMsg('')} />

            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Add activity</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='ion-text-center'>
                                <IonSegment ref={activityTypeInput}>
                                    <IonSegmentButton value='work'>
                                        <IonLabel>Work</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='rest'>
                                        <IonLabel>Rest</IonLabel>
                                    </IonSegmentButton>
                                    <IonSegmentButton value='hobby'>
                                        <IonLabel>Hobby</IonLabel>
                                    </IonSegmentButton>
                                </IonSegment>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>Activity title</IonLabel>
                                    <IonInput ref={titleInput} type='text' />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>Activity description</IonLabel>
                                    <IonInput ref={descriptionInput} type='text' />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position='floating'>Starting Hour</IonLabel>
                                    <IonDatetime ref={hourInput} displayFormat='h:mm A' value={new Date().toISOString()} />
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className='ion-text-center ion-margin-top'>
                                <IonButton onClick={addActivity} expand='block' fill='outline'>
                                    Add activity
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>

        </React.Fragment>
    );
};

export default AddActivity;
