import { IonBackButton, IonImg, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './CompanyQualification.module.scss';

import { arrowBack, chatbubbleEllipses } from "ionicons/icons";

const CompanyQualification = () => {

    return (
        <IonPage className={styles.companyQualificationPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol>
                            <IonButtons>
                                <IonBackButton icon={arrowBack} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol>
                            <h5 className='ion-text-center ion-no-margin'>Company Qualification</h5>
                        </IonCol>
                        <IonCol>
                            <IonButtons className='ion-justify-content-end'>
                                <IonRouterLink className='ion-text-right' href="https://direct.lc.chat/14101083/">
                                    <IonIcon icon={chatbubbleEllipses} />
                                </IonRouterLink>
                            </IonButtons>
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className={styles.companyQualificationContainer}>
                    <IonCard className={`ion-padding ${styles.companyQualificationContent}`}>
                        <IonImg src="/assets/img/contact4.png" />
                    </IonCard>
                </div>
            </IonContent>

        </IonPage>
    );
};

export default CompanyQualification;