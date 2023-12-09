import {
	AntDesignOutlined, 
  DashboardOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
	UserOutlined,
	PictureOutlined,
	GiftOutlined,
	ShopOutlined,
	UsergroupAddOutlined,
	MailOutlined,
	SettingOutlined,
	MobileOutlined,
	FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';


const mainBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: AntDesignOutlined,
  breadcrumb: false,
  submenu: [
		{
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
				{
					key: 'main-catalog-goods',
					path: `${APP_PREFIX_PATH}/main/catalog/goods`,
					title: 'sidenav.main.catalog.goods',
					icon: '',
					breadcrumb: false,
					submenu: []
				}, {
					key: 'main-catalog-categories',
					path: `${APP_PREFIX_PATH}/main/catalog/categories`,
					title: 'sidenav.main.catalog.categories',
					icon: '',
					breadcrumb: false,
					submenu: []
				}, {
					key: 'main-catalog-collections',
					path: `${APP_PREFIX_PATH}/main/catalog/collections`,
					title: 'sidenav.main.catalog.collections',
					icon: '',
					breadcrumb: false,
					submenu: []
				}, {
					key: 'main-catalog-combo',
					path: `${APP_PREFIX_PATH}/main/catalog/combo`,
					title: 'Комбо',
					icon: '',
					breadcrumb: false,
					submenu: []
				}
			]
    }, {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    }, {
				key: 'main-customers',
				path: `${APP_PREFIX_PATH}/main/customers`,
				title: 'sidenav.main.customers',
				icon: UserOutlined,
				breadcrumb: false,
				submenu: [
					{
						key: 'main-customers-list',
						path: `${APP_PREFIX_PATH}/main/customers/list`,
						title: 'sidenav.main.customers.list',
						icon: '',
						breadcrumb: false,
						submenu: []
					}, {
						key: 'main-customers-groups',
						path: `${APP_PREFIX_PATH}/main/customers/groups`,
						title: 'sidenav.main.customers.groups',
						icon: '',
						breadcrumb: false,
						submenu: []
					}
				]
		}, {
			key: 'main-banners',
			path: `${APP_PREFIX_PATH}/main/banners`,
			title: 'sidenav.main.banners',
			icon: PictureOutlined,
			breadcrumb: false,
			submenu: []
		}, {
			key: 'main-promocodes',
			path: `${APP_PREFIX_PATH}/main/promocodes`,
			title: 'sidenav.main.promocodes',
			icon: GiftOutlined,
			breadcrumb: false,
			submenu: []
		}, {
			key: 'main-shops',
			path: `${APP_PREFIX_PATH}/main/shops`,
			title: 'sidenav.main.shops',
			icon: ShopOutlined,
			breadcrumb: false,
			submenu: [
				{
					key: 'main-shops-location',
					path: `${APP_PREFIX_PATH}/main/shops/location`,
					title: 'sidenav.main.shops.location',
					icon: '',
					breadcrumb: false,
					submenu: []
				}, {
					key: 'main-shops-geozones',
					path: `${APP_PREFIX_PATH}/main/shops/geozones`,
					title: 'Геозоны',
					icon: '',
					breadcrumb: false,
					submenu: []
				}
			]
		}, {
			key: 'main-staff',
			path: `${APP_PREFIX_PATH}/main/staff`,
			title: 'sidenav.main.staff',
			icon: UsergroupAddOutlined,
			breadcrumb: false,
			submenu: []
		}, {
			key: 'main-mails',
			path: `${APP_PREFIX_PATH}/main/mails`,
			title: 'sidenav.main.mails',
			icon: MailOutlined,
			breadcrumb: false,
			submenu: []
		}
	]
}];

const systemBoardNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: '',
  breadcrumb: false,
  submenu: [
		{
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/setttings`,
      title: 'sidenav.system.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'system-mobileapp',
      path: `${APP_PREFIX_PATH}/system/mobileapp`,
      title: 'sidenav.system.mobileapp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    }, {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'sidenav.system.logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
	]
}];

const navigationConfig = [
  ...mainBoardNavTree,
	...systemBoardNavTree
];

export default navigationConfig;
