import { IonButton, IonButtons, IonImg, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar, IonFooter } from '@ionic/react';
import styles from './Signup.module.scss';

import SignupField from '../../components/signup/SignupField';
import { globeOutline } from "ionicons/icons";
import { useSignupFields } from '../../data/fields';
import { useEffect, useState } from 'react';
import { validateForm } from '../../data/utils';
import { useParams } from 'react-router';
import { useIonRouter } from "@ionic/react";

import { useTranslation } from "react-i18next";


const Signup = () => {
    const { t, i18n } = useTranslation('lang');
    const router = useIonRouter();
    const params = useParams();
    const fields = useSignupFields();
    const [errors, setErrors] = useState(false);

    const createAccount = () => {

        const errors = validateForm(fields);
        setErrors(errors);

        if (!errors.length) {
            router.push("/login");
            //  Submit your form here
        }
    }

    useEffect(() => {
        return () => {
            fields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

    return (
        <IonPage className={styles.signupPage}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonRouterLink routerLink='/language'>
                            <IonButton>
                                <IonIcon icon={globeOutline} />
                            </IonButton>
                        </IonRouterLink>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid className="ion-padding">
                    <IonRow className='ion-justify-content-center'>
                        <IonImg src="/assets/images/app-logo2.png" />
                    </IonRow>
                    <IonRow className="ion-margin-top ion-padding-top">
                        <IonCol size="12">
                            {fields.map(field => {
                                return <SignupField field={field} errors={errors} />;
                            })}
                            <IonButton className="custom-button ion-padding-top ion-margin-bottom" expand="block" onClick={createAccount}>{t('signup.register')}</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className='ion-justify-content-center ion-padding-top'>
                        <IonRouterLink routerLink='/login'>
                            <p>
                                {t('signup.login')}
                            </p>
                        </IonRouterLink>
                    </IonRow>
                    <IonRow className='ion-justify-content-center'>
                        <IonRouterLink routerLink='/login'>
                            <p className='ion-no-margin'>
                                {t('signup.app')}
                            </p>
                        </IonRouterLink>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonFooter>
                <IonRow className='ion-justify-content-center ion-padding-bottom'>
                    <div className={styles.footerLine}></div>
                </IonRow>
            </IonFooter>
        </IonPage>
    );
};

export default Signup;