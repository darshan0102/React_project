import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Navbar4 from "@material-tailwind/react";

const navListMenuItems1 = [
  {
    title: "HomePage",
    description: ["Home 1", "Home 2", "Home 3", "Home 4", "Home 5", "Home 6"],
  },
  {
    title: "Shop Layouts",
    description: [
      "Shop Top Categories",
      "Shop Top Brands",
      "Shop List",
      "Shop Scroll Sidebar",
      "Shop Top Filter",
      "Shop Load More Button",
      "Shop Infinity Scroll",
      "Shop Ajax Pagination",
    ],
  },
  {
    title: "product layouts",
    description: [
      "Horizontal Thumbnails",
      "Vertical Thumbnails",
      "Grid Thumbnails",
      "Variation Thumbnails",
      "Variation Dropdown",
      "Product Deal",
      "Group Products",
      "Product Video",
    ],
  },
  {
    title: "Abhout us",
    description: [
      "About Us",
      "Contact Us",
      "Blog",
      "Blog Detail",
      "Track Order",
      "Flash Sale",
      "Coming Soon",
      "404",
    ],
  },
];

const navListMenuItems2 = [
  {
    title: "Computers & Tablets",
    description:["Laptops & Desktops","Tablets","Monitors","Laptops","Accessories",],

  },
  {
    title: "Cell Phone",
    description:["Smartphone","AT&T","iPhone","Prepaid Phones","Samsung Galaxy","Unlocked Phones",],
  },
  {
    title: "Audio",
    description:["Bluetooth Speakers","Portable Speakers","Professional Speakers","Waterproof Speakers","Headphones","Speakers",],
  },
  {
    title: "Video Games",
    description:["Xbox Series","Playstation 4","Playstation 5","Gaming Headsets","Accessories",],
  },
  {
    title: "Camera",
    description:["Camera","Accessories","Camera & Lenses","Drones","Security Cameras",],
  },
  {
    title: "TV & Home Theater",
    description:["Television","55 TVs","66 TVs","OLED TVs","OLED TVs",],
  },
  {
    title: "Smart Home",
    description:["Smart Home","Security Cameras","Television",],
  },
  {
    title: "Headphones",
    description:["Headphones","AirPods","Gaming Headsets","Kids' Headphones","Wireless Earbuds",],
  },
];

const navListMenuItems3 = [
  {
    title: "Computers & Tablets",
    description:["Laptops & Desktops","Tablets","Monitors","Accessories","Computer Component","PC Gaming",],
  },
  {
    title: "Cell Phone",
    description:["Smartphone","AT&T","iPhone","Prepaid Phones","Samsung Galaxy","Unlocked Phones","Verizon",],
  },
];

const navListMenuItems4 = [
  {
    title: "Computers & Tablets",
    description:["Laptops & Desktops","Tablets","Monitors","Laptops","Accessories","Macbook",],
  },
  {
    title: "Cell Phone",
    description:["Smartphone","AT&T","iPhone","Prepaid Phones","Samsung Galaxy","Unlocked Phones",],
  },
  {
    title: "Audio",
    description:["Bluetooth Speakers","Portable Speakers","Professional Speakers","Waterproof Speakers","Headphones","Speakers",],
  },
  {
    title: "Video Games",
    description:["Xbox Series","Playstation 4","Playstation 5","Gaming Headsets","Accessories","PC Gaming",],
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMenu2Open, setIsMenu2Open] = React.useState(false);
  const [isMenu3Open, setIsMenu3Open] = React.useState(false);
  const [isMenu4Open, setIsMenu4Open] = React.useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileMenu2Open, setIsMobileMenu2Open] = React.useState(false);
  const [isMobileMenu3Open, setIsMobileMenu3Open] = React.useState(false);
  const [isMobileMenu4Open, setIsMobileMenu4Open] = React.useState(false);

  const renderItems1 = navListMenuItems1.map(
    ({ icon, title, description }, key) => (
      <a href="#" k8y={key}>
        <div className=" p-10 rounded-lg font-semiboldX max-w-[1200px]">
          <div>
            <div
              variant="h6"
              color=""
              className="flex items-center font-bold text-black py-3 text-[18px]"
            >
              {title}
            </div>
            <div variant="paragraph" className="text-black">
              <ul>
                {description.map((item) => (
                  <li className="text-gray-900 text-md py-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </a>
    )
  );

  const renderItems2 = navListMenuItems2.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <div
              variant="h6"
              color=""
              className="flex items-center text-sm font-bold text-black py-3 text-[18px]"
            >
              {title}
            </div>
            <div variant="paragraph" className="text-black">
              <ul>
                {description.map((item) => (
                  <li className="text-gray-900 text-md py-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </MenuItem>
      </a>
    )
  );

  const renderItems3 = navListMenuItems3.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <div
              variant="h6"
              color=""
              className="flex items-center text-sm font-bold text-black py-3 text-[18px]"
            >
              {title}
            </div>
            <div variant="paragraph" className="text-black">
              <ul>
                {description.map((item) => (
                  <li className="text-gray-900 text-md py-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </MenuItem>
      </a>
    )
  );

  const renderItems4 = navListMenuItems4.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <div
              variant="h6"
              color=""
              className="flex items-center text-sm font-bold text-black py-3 text-[18px]"
            >
              {title}
            </div>
            <div variant="paragraph" className="text-black">
              <ul>
                {description.map((item) => (
                  <li className="text-gray-900 text-md py-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler> 
          <div as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-10 font-medium text-gray-900 -mt-1"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Home
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2 outline-none outline-0 text-[16px]">
            {renderItems1}
          </ul>
        </MenuList>
      </Menu>

      <Menu
        open={isMenu2Open}
        handler={setIsMenu2Open}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 mt-0.5"
              selected={isMenu2Open || isMobileMenu2Open}
              onClick={() => setIsMobileMenu2Open((cur) => !cur)}
            >
              Laptop
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenu2Open ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenu2Open ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-10 p-2 outline-none outline-0 text-[16px]">
            {renderItems2}
          </ul>
        </MenuList>
      </Menu>

      <Menu
        open={isMenu3Open}
        handler={setIsMenu3Open}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 mt-0.5"
              selected={isMenu3Open || isMobileMenu3Open}
              onClick={() => setIsMobileMenu3Open((cur) => !cur)}
            >
              Smartphone
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenu3Open ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenu3Open ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-10 outline-none outline-0 p-2 text-[16px]">
            {renderItems3}
          </ul>
        </MenuList>
      </Menu>

      <Menu
        open={isMenu4Open}
        handler={setIsMenu4Open}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div as="div" variant="small" className="font-medium ">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 mt-0.5"
              selected={isMenu4Open || isMobileMenu4Open}
              onClick={() => setIsMobileMenu4Open((cur) => !cur)}
            >
              Headphone
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenu4Open ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenu4Open ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 p-2 gap-14 outline-none outline-0 text-[16px]">
            {renderItems4}
          </ul>
        </MenuList>
      </Menu>

      <div className="block lg:hidden">
        <Collapse open={isMobileMenu4Open}>{renderItems1}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className=" p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu />
      <div
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Camera
        </ListItem>
      </div>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-none px-4 py-2 border border-gray-200 shadow-none  rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900 px-10">
        <div
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >

          <a href="">shop categories</a>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex text-black">
          <div variant="gradient">
            Today's Deal
          </div>
          <div className="py-0.5 relative">
            <div className="bg-red-700 text-white rounded-sm text-sm w-9 h-5 px-0.5 mr-10">HOT</div>
          </div>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithMegaMenu;