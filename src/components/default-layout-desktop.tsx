"use client";
import { PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Modal, theme } from "antd";
import { useState } from "react";
import { HeaderComponent } from "./header";
import { HeaderMobileAndTablet } from "./HeaderMobileAndTablet";
import { BottomNavbar } from "./bottom-navbar";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

export interface IDefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayoutDesktop(props: IDefaultLayoutProps) {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item: any) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="desktop">
        <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className="text-white"
          >
            <div className="demo-logo-vertical" />
            {!collapsed && (
              <div className="additional-element">
                <div className="grid grid-cols-2 p-2">
                  <div className="flex gap-2 hover:bg-[#4b5b67] cursor-pointer  text-primary rounded-full items-center p-2 ">
                    <p>
                      <svg
                        width={15}
                        height={16}
                        viewBox="0 0 15 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path d="M9.42787 9.26726C7.78061 7.47495 8.11114 4.76519 8.81493 2.44788C9.118 2.84478 9.4535 3.12272 9.45571 3.11722C9.12423 3.93582 9.42914 4.89782 10.2161 5.37179C11.0211 5.85688 13.1983 5.64954 14.1179 5.56644C13.7852 4.75372 12.9698 2.71747 12.1575 2.22835C11.4702 1.8141 10.6163 1.89278 10.0211 2.36319C9.75938 2.1441 9.54869 1.86953 9.39715 1.6355C9.90158 1.3575 10.4458 1.10194 11.0296 0.868938L10.6741 0C5.60743 2.02288 3.55893 5.75879 3.82221 9.30351C2.19234 9.55532 0.941406 10.9516 0.941406 12.631C0.941406 15.3472 4.0335 16.924 6.27349 15.413C4.88893 13.8069 4.90509 11.4364 6.27349 9.84904C5.82879 9.54879 5.31512 9.35507 4.77266 9.28851C4.58709 7.07857 5.49484 4.57469 7.73508 2.7476C7.12012 4.99101 6.97545 7.61957 8.38159 9.48442C6.20484 10.3071 5.48345 13.0099 6.97536 14.7809C8.99772 17.1879 13.0099 15.7967 13.0099 12.631C13.0099 10.7136 11.3879 9.17092 9.42787 9.26726Z" />
                      </svg>
                    </p>
                    <p className="text-white text-xs font-semibold">Casino</p>
                  </div>
                  <div className="flex gap-2 hover:bg-[#4b5b67] cursor-pointer  text-primary rounded-full items-center p-2 ">
                    <p>
                      <svg
                        width={15}
                        height={16}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm1 4.2a.5.5 0 01.3-.5l2.8-1.2a.5.5 0 01.4 0 10.5 10.5 0 013 2.3.5.5 0 01.2.4l-.3 3.1a.5.5 0 01-.2.4l-2 1a.5.5 0 01-.5 0l-3.5-2.5a.5.5 0 01-.2-.4zm-8.6.5a10.5 10.5 0 013.1-2.2.5.5 0 01.4 0l2.8 1.2a.5.5 0 01.3.5v2.6a.5.5 0 01-.2.4L7.4 9.6a.5.5 0 01-.5 0l-2-1a.5.5 0 01-.3-.3L4.3 5a.5.5 0 01.1-.4zm3.4 11.8l-1.2 1.3a.5.5 0 01-.4.1L3 17.2a.5.5 0 01-.3-.2 10.4 10.4 0 01-1.2-3.6.5.5 0 01.1-.4l2-2.2a.5.5 0 01.6-.1l2 1.1a.5.5 0 01.3.3l1.3 4a.5.5 0 01-.1.4zm8 3l-1.6 2.6a.5.5 0 01-.3.2 10.5 10.5 0 01-3.8 0 .5.5 0 01-.3-.2l-1.5-2.6a.5.5 0 010-.6l1.1-1.2a.5.5 0 01.4-.2h4.4a.5.5 0 01.4.2l1.1 1.2a.5.5 0 010 .6zm5.4-2.5a.5.5 0 01-.3.2l-3 .7a.5.5 0 01-.5-.1l-1.2-1.3a.5.5 0 010-.5l1.2-4a.5.5 0 01.3-.2l2-1.1a.5.5 0 01.7 0l1.9 2.3a.5.5 0 01.1.4 10.4 10.4 0 01-1.2 3.6z"></path>
                      </svg>
                    </p>
                    <p className="text-white text-xs font-semibold">Sports</p>
                  </div>
                </div>
              </div>
            )}
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={[
                {
                  key: "1",
                  label: "Option 1",
                  icon: <PieChartOutlined />,
                },
                {
                  key: "2",
                  label: "Option 1",
                  icon: <PieChartOutlined />,
                },
              ]}
            />
          </Sider>
          <Layout>
            <Content
              style={{ padding: "32px 70px", backgroundColor: "#1e2d3b" }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </div>
      <div className="tablet">
        <HeaderMobileAndTablet
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <div className="p-3 bg-[#203241]">{children}</div>
        <BottomNavbar />
      </div>
      <div className="mobile">
        <HeaderMobileAndTablet
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <div className="p-3 bg-[#203241]">{children}</div>
        <BottomNavbar />
      </div>
    </>
  );
}
