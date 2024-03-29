import React, { useState, useRef } from "react";
import "./BrowserHeader.css";

export default function BrowserHeader({
  activeBrowserTab,
  changeActiveTab,
  browserSite,
  width,
  setProgramm,
  Programm,
}) {
  let [showTabs, setShowTabs] = useState(false);

  function switchTabs() {
    setShowTabs(!showTabs);
  }

  function isMobile() {
    if (width < 500) {
      return (
        <div className="browserHeader">
          <div className="tabRow">
            <div
              className={
                activeBrowserTab == browserSite.ShapeCSS
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.ShapeCSS)}
            >
              <h3>Shape CSS</h3>
            </div>
            <div
              className={
                activeBrowserTab != browserSite.ShapeCSS
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={switchTabs}
            >
              <h3>More</h3>
            </div>
            {showTabs && (
              <div className="moreTab" onClick={switchTabs}>
                <div className="moreTabContainer">
                  <ul>
                    <li
                      className={
                        activeBrowserTab == browserSite.Portfolio
                          ? "activeli"
                          : ""
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.Portfolio);
                        switchTabs();
                      }}
                    >
                      Portfolio
                    </li>
                    <li
                      className={
                        activeBrowserTab == browserSite.LinkShare
                          ? "activeli"
                          : ""
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.LinkShare);
                        switchTabs();
                      }}
                    >
                      LinkShare
                    </li>
                    <li
                      className={
                        activeBrowserTab == browserSite.Audiophile
                          ? "activeli"
                          : ""
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.Audiophile);
                        switchTabs();
                      }}
                    >
                      Audiophile
                    </li>
                    <li
                      className={
                        activeBrowserTab == browserSite.ThreeJSBall
                          ? "activeli"
                          : ""
                      }
                      onClick={() => {
                        changeActiveTab(browserSite.ThreeJSBall);
                        switchTabs();
                      }}
                    >
                      ThreeJS Game
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="searchBar">
            {width <= 825 ? (
              <button onClick={() => setProgramm(Programm.None)}>
                <img src="/images/icons/chevron-left-solid.svg" />
                <p>Home</p>
              </button>
            ) : (
              <>
                <p className="backArrowBrowser navigationButton">&#10132;</p>
                <p className="navigationButton">&#x2794;</p>
                <p className="reloadArrowBrowser navigationButton">&#x27F3;</p>
              </>
            )}

            <div className="searchField">
              <p>www.{activeBrowserTab.toLowerCase()}.com</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="browserHeader">
          <div className="tabRow">
            <div
              className={
                activeBrowserTab == browserSite.ShapeCSS
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.ShapeCSS)}
            >
              <h3>Shape CSS</h3>
            </div>
            <div
              className={
                activeBrowserTab == browserSite.Portfolio
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.Portfolio)}
            >
              <h3>Portfolio</h3>
            </div>
            <div
              className={
                activeBrowserTab == browserSite.LinkShare
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.LinkShare)}
            >
              <h3>LinkShare</h3>
            </div>
            <div
              className={
                activeBrowserTab == browserSite.Audiophile
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.Audiophile)}
            >
              <h3>Audiophile</h3>
            </div>
            <div
              className={
                activeBrowserTab == browserSite.ThreeJSBall
                  ? "browserTab activeTab"
                  : "browserTab"
              }
              onClick={() => changeActiveTab(browserSite.ThreeJSBall)}
            >
              <h3>ThreeJS Game</h3>
            </div>
          </div>
          <div className="searchBar">
            {width <= 825 ? (
              <button onClick={() => setProgramm(Programm.None)}>
                <img src="/images/icons/chevron-left-solid.svg" />
                <p>Home</p>
              </button>
            ) : (
              <>
                <p className="backArrowBrowser navigationButton">&#10132;</p>
                <p className="navigationButton">&#x2794;</p>
                <p className="reloadArrowBrowser navigationButton">&#x27F3;</p>
              </>
            )}

            <div className="searchField">
              <p>www.{activeBrowserTab.toLowerCase()}.com</p>
            </div>
          </div>
        </div>
      );
    }
  }

  return isMobile();
}
