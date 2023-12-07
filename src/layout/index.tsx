import { useRoutes } from "@solidjs/router";
import routes from "../routers";
import Nav from "./components/nav";
import Switchbg from "./components/switchbg";

function Layout() {
	const Routes = useRoutes(routes);
	return (
		<>
			<Nav></Nav>
			<Switchbg></Switchbg>
			<Routes />
		</>
	);
}

export default Layout;
