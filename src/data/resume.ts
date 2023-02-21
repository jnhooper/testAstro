export interface Role {
  title: string,
  shortTitle?: string
  startDate: Date
  endDate?: Date
  accomplishments: string[]
}

export interface Company {
  companyName: string
  startDate: Date
  endDate?: Date
  roles: Role[]
}
export type ResumeSchema = Company[]
export const resume: ResumeSchema = [
  {
    companyName: 'Newsela',
    startDate: new Date('August 2018'),
    roles:[{
      title: 'Lead Engineer for Design Systems',
      shortTitle: 'Lead Engineer',
      startDate: new Date('March 2019'),
      accomplishments: [
        'Pioneer the push towards accessibility on a company wide scale. Causing Newsela to be a leader in Accessibility in ed tech and driving legislation ensuring equitable learning tools for all students',
        'Introduce Typescript to the engineering org. This includes pitching to engineers as well as leadership, configuring our projects to use Typescript and continuously educating fellow engineers.',
        'Help grow the company to become a Unicorn',
        'Create and maintain a stand alone repo of react components, styles and hooks to serve as a Design System for the company.',
        'Manage releases and rollout of the Angelou design system.',
        'Promote and maintain a healthy, equitable, diverse and welcoming engineering culture during a period of rapid growth',
        'Serve as a knowledge expert on accessibility for a large product org, sitting in on product pitches and design meetings to try and catch accessibility pit falls before they go to far, and work shopping viable, accessible alternatives',
        'Mentor junior devs and teach them best practices',
        'Act as knowledge expert for all things front end. This includes React, Nextjs, SSR (Server Side Rendering), SSG (Static Site Generation), Css in js, Webpack, Typescript, Javascript, graphql, architecture, Redux, Vite, design tokens etc.',
        'Run team meetings. Our team lacks a Product/Project manager so I run and organize team meetings and ceremonies.',
        'Meet with other team leads and PMs to help architect cross cutting projects. As a team focused on design systems we sit at the cross roads for most teams and projects, and are often consulted on the best approach to take in terms of ui/ux',
        'Work hand in hand with Design to come up with scalable, accessible patterns, that can be used by a variety of teams',
        'Architect and implement a scalable solution to facilitate test automation',
        'Help to grow the engineering org from 15 engineers (only 3 focused on front end) to well over 60 engineers',
      ]
    },
      {
        title: 'Senior Web Engineer',
        startDate: new Date('August 2018'),
        endDate: new Date('March 2019'),
        accomplishments: [
          'Mentor junior devs',
          "Modernize Newsela's tech stack by utelizing CSS in JS",
          'Maintain Webpack Configuration',
          'Help migrate from Angular to React',
          'Assist in removing legacy coffeescript',
          'Work with other teams to architect new front end state management utelizing redux',
        ]
      }
    ]
  },
  // NOVU
  {
    companyName: 'NovuHealth',
    startDate: new Date('January 2017'),
    endDate: new Date('August 2018'),
    roles:[{
      title: 'Full Stack Engineer',
      startDate: new Date('January 2017'),
      endDate: new Date('August 2018'),
      accomplishments:[
        'Work on customer facing portion of the product',
        'Adhere to HIPAA compliance',
        'Architect elegant, scalable, HIPAA compliant analytics solution utelizing Google Tag Manager and Google Analytics',
        'Create and architect a dynamic demo version of the website from scratch for sales team, utelizing react and redux, while encouraging sharing code between repos for consistency',
        'Lead the drive for a component library to create a unified brand identity across projects and architect scalable way to achieve this.',
        'Implement new features and create multiple endpoints for different products to have access to them',
      ]
    }]
  },
  // ROBERT HALF
  {
    companyName: 'Rober Half Technology',
    startDate: new Date('June 2016'),
    endDate: new Date('January 2017'),
    roles:[{
      title: 'Senior UI Engineer',
      startDate: new Date('June 2016'),
      endDate: new Date('January 2017'),
      accomplishments:[
        'Contract out to a Minneapolis company running Dojo and Angular',
        'Work with full time employees to revamp legacy Dojo code',
        'Rewrite application to be a SPA (Single Page Application) using Angular 1.8',
        'Live triage and bug squashing for clients on a weekly basis'
      ],
    }]
  },
  // FREELANCE 
  {
    companyName: 'Freelance',
    startDate: new Date('September 2014'),
    endDate: new Date('May 2016'),
    roles:[{
      title: 'Developer (& Student)',
      startDate: new Date('September 2014'),
      endDate: new Date('May 2016'),
      accomplishments:[
        'Work as a Front End Engineer for the OpenKim Project, an online resource for standardized testing and long-term warehousing of interatomic models and data.',
        'Create dynamic SVG data visualizations for the OpenKim Project, driven by D3',
        'Design and maintain a wordpress site for small local publisher',
        'Front end work, including data visualizations for a small local startup'
      ],
    }]
  },
  // IMAGINE
  {
    companyName: 'Imagine! Print Solutions',
    startDate: new Date('August 2013'),
    endDate: new Date('August 2014'),
    roles:[{
      title: 'Javascript Consultant',
      shortTitle: 'Web Developer',
      startDate: new Date('August 2013'),
      endDate: new Date('August 2014'),
      accomplishments:[
        'Work with in house developers to create new web technologies for their client portal',
        "Create an automated SVG menu creation tool used by Auntie Anne's and Famous Daves. Given a CSV file our tool would generate an infinitely scalable vector graphic menu.",
        'Create an interactive 3D environment, meant to visualize in store displays and advertising'
      ],
    }]
  }
]