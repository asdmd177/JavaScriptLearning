import Vue from 'vue'
import { 
	Message,
	Button,
	Divider,
	Form,
	FormItem,
	Input,
	Card,	
	Header,
	Container,
	Aside,
	Main,
	Menu,
	Submenu,
	MenuItem,
	MenuItemGroup,
	Avatar,
	Breadcrumb,
	BreadcrumbItem,
	Row,
	Col,
	MessageBox,
	Checkbox,
	Table,
	TableColumn,
	Switch,
	Pagination
} from 'element-ui'

//login
Vue.use(Button)
Vue.use(Input)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Divider)

//Home
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)

//aside
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

//header
Vue.use(Avatar)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Col);

//userlist
Vue.use(Checkbox)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)

//common
Vue.prototype.$msg = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
