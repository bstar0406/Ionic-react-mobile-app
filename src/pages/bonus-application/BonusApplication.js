import { IonBackButton, IonImg, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './BonusApplication.module.scss';

import { arrowBack, chatbubbleEllipses } from "ionicons/icons";


const BonusApplication = () => {

    return (
        <IonPage className={styles.bonusApplicationPage}>
            <IonHeader>
                <IonToolbar>
                    <IonRow className='ion-justify-content-between ion-align-items-center'>
                        <IonCol>
                            <IonButtons>
                                <IonBackButton icon={arrowBack} text="" className="custom-back ion-no-padding ion-no-margin" />
                            </IonButtons>
                        </IonCol>
                        <IonCol>
                            <h5 className='ion-text-center ion-no-margin'>Lucky Bonus Application</h5>
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
                <div className={styles.bonusApplicationContainer}>
                    <IonCard className={`ion-padding ${styles.bonusApplicationContent}`}>
                        <IonImg src="/assets/img/contact6.png" />
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default BonusApplication;