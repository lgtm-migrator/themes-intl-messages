import { defineMessages } from '@formatjs/intl';

export const subscription = defineMessages({
    formTitle: {
        id: 'subscription.formTitle',
        defaultMessage: 'Get updates in your mailbox',
    },
    labelEmail: {
        id: 'subscription.labelEmail',
        defaultMessage: 'Your email address',
    },
    captchaDisclaimer: {
        id: 'subscription.captchaDisclaimer',
        defaultMessage:
            'This site is protected by hCaptcha and its {privacyPolicyLink} and {termsOfServiceLink} apply.',
    },
    privacyPolicy: {
        id: 'subscription.privacyPolicy',
        defaultMessage: 'Privacy Policy',
    },
    termsOfService: {
        id: 'subscription.termsOfService',
        defaultMessage: 'Terms of Service',
    },
});
