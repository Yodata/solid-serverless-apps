// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Hero from '../components/hero'
import AppCard from '../components/app-card'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import StarBorder from '@material-ui/icons/StarBorder'
import GroupWork from '@material-ui/icons/GroupWork'
import Contacts from '@material-ui/icons/Contacts'
import ContactMail from '@material-ui/icons/ContactMail'
import Business from '@material-ui/icons/Business'
import NewReleases from '@material-ui/icons/NewReleases'
import AppBar from '@material-ui/core/AppBar'

const styles = theme => ({
  heroUnit: {
    marginBottom: '2em'
  },
  appBar: {
    marginBottom: '2em'
  }
});

const permission = {
  profile: {
    icon: <Business />,
    description: 'view agent & office profiles',
    id: 'profile_read'
  },
  contact_read: {
    icon: <Contacts />,
    description: 'see contact events',
    id: 'contact_read'
  },
  contact_write: {
    icon: <Contacts />,
    description: 'modify your contact information',
    id: 'contact_write'
  },
  lead_read: {
    icon: <NewReleases />,
    description: 'see your leads',
    id: 'lead_read'
  },
  lead_write: {
    icon: <NewReleases />,
    description: 'create and update your leads',
    id: 'lead_write'
  },

}

const ALL_PERMISSIONS = [
  permission.profile,
  permission.contact_read,
  permission.contact_write,
  permission.lead_read,
  permission.lead_write
]

const applications = [
  {
    name: 'RDesk',
    description: 'CRM from Real Estate Digital',
    logo: {
      url: '/static/img/red-logo.jpg'
    },
    permissions: [
      permission.profile,
      permission.contact_read,
      permission.contact_write,
      permission.lead_read,
      permission.lead_write
    ],
    group: [
      'crm'
    ]
  },
  {
    name: 'Moxiworks',
    description: 'Dramatically increase your repeat and referral business with the help of MoxiWorks tools and services.',
    logo: {
      url: 'https://images-static.moxiworks.com/static/images/br/moxi/MoxiWorks_logo_lightBG-300x65.png'
    },
    permissions: ALL_PERMISSIONS,
    group: [
      'crm'
    ]
  },
  {
    name: 'Reliance Network',
    description: 'One platform to deliver Stunning Websites, Quality Leads and More Closings.',
    logo: {
      url: 'https://www.reliancenetwork.com/reliancenetwork/img/logo.png'
    },
    permissions: ALL_PERMISSIONS,
    group: [
      'crm'
    ]

  }, {
    name: 'Adwerks',
    description: 'Brilliantly simple digital advertising for real estate, mortgage, insurance, and wealth management.',
    logo: { url: 'https://cdn.adwerx.com/assets/v2/images/logos/header_logos/adwerx-header-logo@2x-e951094f78.png' },
    permissions: ALL_PERMISSIONS,
    group: [
      'featured',
      'marketing'
    ]
  },
  {
    name: 'Chalk Digital',
    description: 'Chalk Digital leverages the power of data, location, and time to energize your companys promotional efforts with intelligent mobile advertising solutions',
    logo: { url: 'http://www.chalkdigital.com/wp-content/uploads/2016/07/CD-New.png' },
    permissions: ALL_PERMISSIONS,
    group: [
      'featured',
      'marketing'
    ]
  },
  {
    name: 'Market Leader',
    description: 'Everything you need to generate leads and convert them into clients. Website, CRM, Marketing Design Center',
    logo: { url: 'https://www.marketleader.com/wp-content/uploads/2016/05/mastheadLogo.png' },
    permissions: ALL_PERMISSIONS,
    group: [
      'featured'
    ]
  },
  {
    name: 'Imprev',
    description: 'Marketing automation services for Real Estate',
    logo: { url: 'https://imprev.com/wp-content/uploads/2017/09/logo.png' },
    permissions: ALL_PERMISSIONS,
    group: [
      'featured',
      'marketing'
    ]
  },
  {
    name: 'Upside Door',
    description: 'An objective resource to help your clients make smart decisions.',
    logo: {
      url: 'https://scontent-sjc3-1.cdninstagram.com/vp/a6fe756b4bdc288e4b59392b674b7823/5D17B586/t51.2885-19/s320x320/51053511_2291097917776179_4030393561059950592_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com',
      backgroundColor: 'black'
    },
    permissions: ALL_PERMISSIONS,
    group: [
      'featured',
      'marketing'
    ]
  },
  {
    name: 'Docebo',
    description: 'Lerning management system',
    logo: {
      url: 'https://www.docebo.com/wp-content/uploads/2017/06/logo_docebo_color.svg'
    },
    permissions: ALL_PERMISSIONS,
    group: [
      'paperless'
    ]
  },
  {
    name: 'Roqlogic',
    description: 'Marketing center',
    logo: { url: 'https://roqlogic.com/wp-content/uploads/2018/02/red-roq-grey-1-260x61.png' },
    permissions: ALL_PERMISSIONS,
    group: [
      'marketing'
    ]
  },
  {
    name: 'RPR',
    description: 'Comprehensive data, powerful analytics and client friendly reports',
    logo: { url: 'https://blog.narrpr.com/wp-content/uploads/2012/08/2015-RPR-Logo_01.png' },
    permissions: ALL_PERMISSIONS,
    group: [
      'marketing'
    ]
  },
  {
    name: 'Rismedia',
    description: 'Automatic content platform',
    logo: { url: 'https://rismediacontentsolutions.com/img/rismedia_ContentSolutions-logo.jpg' },
    permissions: ALL_PERMISSIONS,
    group: [
      'featured',
      'marketing'
    ]
  }

];

function getApplications(group = 'featured') {
  return applications.filter(function (app) {
    let result = false
    if (app && app.group) {
      result = app.group.includes(group)
    }
    return result
  })
}

function Page(props) {
  const [tabIndex, setTabIndex] = React.useState('featured');
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Hero
        className={classes.heroUnit}
        title='ForeverCloud App Exchange'
        content='Select the apps you want to use.'>
      </Hero>
      <AppBar position='static' className={classes.appBar}>
        <Tabs
          value={tabIndex}
          centered
          onChange={(event, value) => {
            console.log({ event, value })
            setTabIndex(value);
          }}

        >
          <Tab label="Featured" icon={<StarBorder />} value='featured' />
          <Tab label="CRM" icon={<Contacts />} value='crm' />
          <Tab label="Marketing" icon={<ContactMail />} value='marketing' />
          <Tab label="Paperless" icon={<GroupWork />} value='paperless' />
        </Tabs>
      </AppBar>

      <Grid container justify='space-around'>
        <Grid item xs={12} style={{ maxWidth: '960px' }}>
          <Grid container spacing={40} alignItems="center">
            {getApplications(tabIndex).map(application => (
              <Grid item key={application.name} sm={12} md={6} lg={4}>
                <AppCard application={application} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);