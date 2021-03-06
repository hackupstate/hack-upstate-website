import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { JobsComponent } from './jobs/jobs.component';
import { HuFourteenComponent } from './events/individual-events/09-hu-fourteen/hu-fourteen.component';
import { HuThirteenComponent } from './events/individual-events/01-hu-thirteen/hu-thirteen.component';
import { HuTwelveComponent } from './events/individual-events/02-hu-twelve/hu-twelve.component';
import { HuElevenComponent } from './events/individual-events/03-hu-eleven/hu-eleven.component';
import { HuTenComponent } from './events/individual-events/04-hu-ten/hu-ten.component';
import { HuNineComponent } from './events/individual-events/05-hu-nine/hu-nine.component';
import { HuEightComponent } from './events/individual-events/06-hu-eight/hu-eight.component';
import { HuSevenComponent } from './events/individual-events/07-hu-seven/hu-seven.component';
import { HuSixComponent } from './events/individual-events/08-hu-six/hu-six.component';
import { BecomeASponsorComponent } from './sponsors/become-a-sponsor/become-a-sponsor.component';
import { CodeOfConductComponent } from './docs/code-of-conduct/code-of-conduct.component';
import { PrivacyPolicyComponent } from './docs/privacy-policy/privacy-policy.component';
import { WaiverComponent } from './waiver/waiver.component';
import { OpenDataComponent } from './open-data/open-data.component';
import { ThanksComponent } from './thanks/thanks.component';
import { HuFifteenComponent } from './events/individual-events/10-hu-fifteen/hu-fifteen.component';
import { EmergencyComponent } from './emergency/emergency.component';

const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,
        data: {
            state: 'home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            state: 'about'
        }
    },
    {
        path: 'events',
        component: EventsComponent,
        data: {
            state: 'events'
        }
    },
    {
        path: 'emergency',
        component: EmergencyComponent,
        data: {
            state: 'emergency'
        }
    },
    {
        path: 'events/xv',
        component: HuFifteenComponent,
        data: {
            state: 'events/xv'
        }
    },
    {
        path: 'events/xiv',
        component: HuFourteenComponent,
        data: {
            state: 'events/xiv'
        }
    },
    {
        path: 'events/xiii',
        component: HuThirteenComponent,
        data: {
            state: 'events/xiii'
        }
    },
    {
        path: 'events/xii',
        component: HuTwelveComponent,
        data: {
            state: 'events/xii'
        }
    },
    {
        path: 'events/xi',
        component: HuElevenComponent,
        data: {
            state: 'events/xi'
        }
    },
    {
        path: 'events/x',
        component: HuTenComponent,
        data: {
            state: 'events/x'
        }
    },
    {
        path: 'events/ix',
        component: HuNineComponent,
        data: {
            state: 'events/ix'
        }
    },
    {
        path: 'events/viii',
        component: HuEightComponent,
        data: {
            state: 'events/viii'
        }
    },
    {
        path: 'events/vii',
        component: HuSevenComponent,
        data: {
            state: 'events/vii'
        }
    },
    {
        path: 'events/vi',
        component: HuSixComponent,
        data: {
            state: 'events/vi'
        }
    },
    {
        path: 'sponsors',
        component: SponsorsComponent,
        data: {
            state: 'sponsors'
        }
    },
    {
        path: 'become-a-sponsor',
        component: BecomeASponsorComponent,
        data: {
            state: 'become-a-sponsor'
        }
    },
    {
        path: 'conduct',
        component: CodeOfConductComponent,
        data: {
            state: 'conduct'
        }
    },
    {
        path: 'thanks',
        component: ThanksComponent,
        data: {
            state: 'thanks'
        }
    },
    {
        path: 'privacy',
        component: PrivacyPolicyComponent,
        data: {
            state: 'privacy'
        }
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        data: {
            state: 'sign-up'
        }
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: {
            state: 'faq'
        }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {
            state: 'contact'
        }
    },
    {
        path: 'jobs',
        component: JobsComponent,
        data: {
            state: 'jobs'
        }
    },
    {
        path: 'waiver',
        component: WaiverComponent,
        data: {
            state: 'waiver'
        }
    },
    {
        path: 'open-data',
        component: OpenDataComponent,
        data: {
            state: 'open-data'
        }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 95] // [x, y]
});
