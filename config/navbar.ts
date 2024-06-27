type NavbarItem = {
    href:string,
    label:string,
    key:string
    children?:NavbarItem []
}

const menuItems: NavbarItem[] = [
    {
      label: "Workouts",
      href: "/workouts",
      key: "navbarmenu_workouts",
    },
    {
      label: "Nutrition",
      href: "/nutrition",
      key: "navbarmenu_nutritoun",
    },
    {
      label: "Blog",
      href: "/blog",
      key: "navbarmenu_blog",
    },
  ];

  export default menuItems