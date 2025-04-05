"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import adminmart_logo from "/public/images/logos/logo-adminmart.svg";
import { Dropdown } from "flowbite-react/components/Dropdown";
import Link from "next/link";
import Image from "next/image";


const Topbar = () => {
    const dropdownItems = [
        {
            id: 1,
            title: "Bootstrap Preview",
            href: "https://adminmart.com/product/matdash-bootstrap-5-admin-dashboard-template/?ref=56#product-demo-section"
        },
        {
            id: 2,
            title: "Angular Preview",
            href: "https://adminmart.com/product/matdash-material-angular-dashboard-template/?ref=56#product-demo-section"
        },
        {
            id: 3,
            title: "Vuejs Preview",
            href: "https://adminmart.com/product/matdash-vuejs-admin-dashboard/?ref=56#product-demo-section"
        },
        {
            id: 4,
            title: "Reactjs Preview",
            href: "https://adminmart.com/product/matdash-tailwind-react-admin-template/?ref=56#product-demo-section"
        },
        {
            id: 5,
            title: "Nextjs Preview",
            href: "https://adminmart.com/product/matdash-next-js-admin-dashboard-template/?ref=56#product-demo-section"
        },

        {
            id: 6,
            title: "Buy Bootstrap Version",
            href: "https://adminmart.com/product/matdash-bootstrap-5-admin-dashboard-template/?ref=56#product-price-section"
        },
        {
            id: 7,
            title: "Buy Angular Version",
            href: "https://adminmart.com/product/matdash-material-angular-dashboard-template/?ref=56#product-price-section"
        },
        {
            id: 8,
            title: "Buy Vuejs Version",
            href: "https://adminmart.com/product/matdash-vuejs-admin-dashboard/?ref=56#product-price-section"
        },
        {
            id: 9,
            title: "Buy Reactjs Version",
            href: "https://adminmart.com/product/matdash-tailwind-react-admin-template/?ref=56#product-price-section"
        },
        {
            id: 10,
            title: "Buy Nextjs Version",
            href: "https://adminmart.com/product/matdash-next-js-admin-dashboard-template/?ref=56#product-price-section"
        },

    ]
  return (
    <div className="py-3 px-4 bg-dark z-40 sticky top-0">
      <div className="flex items-center xl:justify-between lg:justify-center xl:gap-0 lg:gap-4 flex-wrap justify-center">
        <div className="flex items-center gap-12">
            <Image src={adminmart_logo} alt="data" />
            <div className="lg:flex items-center gap-3 hidden">
                <Link href="https://adminmart.com/support/" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-3 px-3 rounded-md">
                    <Icon icon="tabler:lifebuoy" className="shrink-0 text-[19px]" />
                    <h4 className="text-sm font-medium leading-none text-white">Support</h4>
                </Link>
                <Link href="https://adminmart.com/" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-3 px-3 rounded-md">
                    <Icon icon="tabler:gift" className="shrink-0 text-[19px]" />
                    <h4 className="text-sm font-medium leading-none text-white">Templates</h4>
                </Link>
                <Link href="https://adminmart.com/hire-us/" className="flex items-center gap-1 text-white bg-transparent hover:bg-primary py-3 px-3 rounded-md">
                    <Icon icon="tabler:briefcase" className="shrink-0 text-[19px]" />
                    <h4 className="text-sm font-medium leading-none text-white">Hire Us</h4>
                </Link>
            </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center lg:mt-0 mt-2">
            <h4 className="text-lg font-medium text-white">Check Matdash Premium Version</h4>
            <Dropdown label={
                <div className="flex items-center gap-1">
                    <Icon icon="tabler:device-laptop" className="text-lg" />
                     <p className="text-[15px]">Live Preview</p>
                </div>
            }  color="primary" size="sm" className="py-2"  >
              {
                dropdownItems.slice(0,5).map((item) => {
                    return (
                        <Dropdown.Item key={item.id} className="flex items-center gap-1 text-sm py-2.5 px-4 group" as={Link} href={item.href} target='_blank' icon={() => <Icon icon="tabler:external-link" className="text-lg text-link group-hover:!text-primary" />}><span className="group-hover:text-primary" >{item.title}</span></Dropdown.Item>
                    )
                })
              }
            </Dropdown>
            <Dropdown label={
                <div className="flex items-center gap-1">
                    <Icon icon="tabler:shopping-cart" className="text-lg" />
                     <p className="text-[15px]">Buy Now</p>
                </div>
            } color="primary" size="sm" >
              {
                dropdownItems.slice(5,10).map((item) => {
                    return (
                        <Dropdown.Item key={item.id} className="flex items-center gap-1 text-sm py-2.5 px-4 group" as={Link} href={item.href} target='_blank' icon={() => <Icon icon="tabler:external-link" className="text-lg text-link group-hover:text-primary" />}><span className="group-hover:text-primary" >{item.title}</span></Dropdown.Item>
                    )
                })
              }
            </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Topbar