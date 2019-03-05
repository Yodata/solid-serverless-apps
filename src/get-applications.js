import Business from '@material-ui/icons/Business'
import NewReleases from '@material-ui/icons/NewReleases'
import Contacts from '@material-ui/icons/Contacts'


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
    ]
  },
  {
    name: 'Moxiworks',
    description: 'Dramatically increase your repeat and referral business with the help of MoxiWorks tools and services.',
    logo: {
      url: 'https://images-static.moxiworks.com/static/images/br/moxi/MoxiWorks_logo_lightBG-300x65.png'
    },
    permissions: ALL_PERMISSIONS
  },
  {
    name: 'Reliance Network',
    description: 'One platform to deliver Stunning Websites, Quality Leads and More Closings.',
    logo: {
      url: 'https://www.reliancenetwork.com/reliancenetwork/img/logo.png'
    },
    permissions: ALL_PERMISSIONS
  }, {
    name: 'Adwerks',
    description: 'Brilliantly simple digital advertising for real estate, mortgage, insurance, and wealth management.',
    logo: { url: 'https://cdn.adwerx.com/assets/v2/images/logos/header_logos/adwerx-header-logo@2x-e951094f78.png' },
    permissions: ALL_PERMISSIONS
  },
  {
    name: 'Imprev',
    description: 'Marketing automation services for Real Estate',
    logo: { url: 'https://imprev.com/wp-content/uploads/2017/09/logo.png' },
    permissions: ALL_PERMISSIONS
  },
  {
    name: 'Upside Door',
    description: 'An objective resource to help your clients make smart decisions.',
    logo: {
      url: 'https://manor.com/wp-content/themes/understrap-child/images/brand_logo@2x.png',
      backgroundColor: 'black'
    },
    permissions: ALL_PERMISSIONS
  },
  {
    name: 'Docebo',
    description: 'Lerning management system',
    logo: {
      url: 'https://www.docebo.com/wp-content/uploads/2017/06/logo_docebo_color.svg'
    },
    permissions: ALL_PERMISSIONS
  },
  {
    name: 'Roqlogic',
    description: 'Marketing center',
    logo: { url: 'https://roqlogic.com/wp-content/uploads/2018/02/red-roq-grey-1-260x61.png' },
    permissions: ALL_PERMISSIONS
  },
  {
    name: 'RPR',
    description: 'Comprehensive data, powerful analytics and client friendly reports',
    logo: { url: 'https://blog.narrpr.com/wp-content/uploads/2016/02/rpr-cobrand.png' },
    permissions: ALL_PERMISSIONS
  },
  {
    name: 'Rismedia',
    description: 'Automatic content platform',
    logo: { url: 'https://rismediacontentsolutions.com/img/rismedia_ContentSolutions-logo.jpg' },
    permissions: ALL_PERMISSIONS
  },
  {
    name: 'Chalk Digital',
    description: 'Intelligent Hyper-Targeted Mobile Advertising',
    logo: { url: ' https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.chalkdigital.com%2Fwp-content%2Fuploads%2F2016%2F07%2FCD-New.png&imgrefurl=http%3A%2F%2Fwww.chalkdigital.com%2F&docid=m42TcSZ-Nh8ZnM&tbnid=TGtOmZU5dc7jBM%3A&vet=10ahUKEwjkjq6Q-dngAhUEOKwKHSLgCc4QMwg_KAAwAA..i&w=675&h=300&client=safari&bih=928&biw=1212&q=chalk%20digital%20logo&ved=0ahUKEwjkjq6Q-dngAhUEOKwKHSLgCc4QMwg_KAAwAA&iact=mrc&uact=8' },
    permissions: ALL_PERMISSIONS
  }
];

module.exports = applications