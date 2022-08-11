import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="footer-top">
          <span>Questions? Call: </span>
          <a href="tel:000-000-000-0000 ">000-000-000-0000 </a>
        </p>

        <ul class="footer-links structural">
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_faq_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/support/412"
              placeholder="footer_responsive_link_faq"
            >
              <span id="" data-uia="data-uia-footer-label">
                FAQ
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_help_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com"
              placeholder="footer_responsive_link_help"
            >
              <span id="" data-uia="data-uia-footer-label">
                Help Centre
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_account_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/youraccount"
              placeholder="footer_responsive_link_account"
            >
              <span id="" data-uia="data-uia-footer-label">
                Account
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_media_center_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://media.netflix.com/"
              placeholder="footer_responsive_link_media_center"
            >
              <span id="" data-uia="data-uia-footer-label">
                Media Centre
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_relations_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="http://ir.netflix.com/"
              placeholder="footer_responsive_link_relations"
            >
              <span id="" data-uia="data-uia-footer-label">
                Investor Relations
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_jobs_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://jobs.netflix.com/jobs"
              placeholder="footer_responsive_link_jobs"
            >
              <span id="" data-uia="data-uia-footer-label">
                Jobs
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_waysToWatch_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/watch"
              placeholder="footer_responsive_link_waysToWatch"
            >
              <span id="" data-uia="data-uia-footer-label">
                Ways to Watch
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_terms_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/legal/termsofuse"
              placeholder="footer_responsive_link_terms"
            >
              <span id="" data-uia="data-uia-footer-label">
                Terms of Use
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_privacy_separate_link_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/legal/privacy"
              placeholder="footer_responsive_link_privacy_separate_link"
            >
              <span id="" data-uia="data-uia-footer-label">
                Privacy
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_cookies_separate_link_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="#"
              placeholder="footer_responsive_link_cookies_separate_link"
            >
              <span id="" data-uia="data-uia-footer-label">
                Cookie Preferences
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_corporate_information_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/legal/corpinfo"
              placeholder="footer_responsive_link_corporate_information"
            >
              <span id="" data-uia="data-uia-footer-label">
                Corporate Information
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_contact_us_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/contactus"
              placeholder="footer_responsive_link_contact_us"
            >
              <span id="" data-uia="data-uia-footer-label">
                Contact Us
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_speed_test_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://fast.com"
              placeholder="footer_responsive_link_speed_test"
            >
              <span id="" data-uia="data-uia-footer-label">
                Speed Test
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_legal_notices_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://help.netflix.com/legal/notices"
              placeholder="footer_responsive_link_legal_notices"
            >
              <span id="" data-uia="data-uia-footer-label">
                Legal Notices
              </span>
            </a>
          </li>
          <li
            class="footer-link-item originals-link"
            placeholder="footer_responsive_link_only_on_netflix_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="https://www.netflix.com/in/browse/genre/839338"
              placeholder="footer_responsive_link_only_on_netflix"
            >
              <span id="" data-uia="data-uia-footer-label">
                Only on Netflix
              </span>
            </a>
          </li>
        </ul>

        <div class="lang-selection-container" id="lang-switcher">
          <div data-uia="language-picker+container" class="ui-select-wrapper">
            <label for="lang-switcher-select" class="ui-label">
              <span class="ui-label-text">Select Language</span>
            </label>
            <div class="select-arrow medium prefix globe">
              <select
                data-uia="language-picker"
                class="ui-select medium"
                id="lang-switcher-select"
                tabindex="0"
                placeholder="lang-switcher"
              >
                <option
                  selected=""
                  lang="en"
                  value="/in/"
                  data-language="en"
                  data-country="IN"
                >
                  English
                </option>
                <option
                  lang="hi"
                  value="/in-hi/"
                  data-language="hi"
                  data-country="IN"
                >
                  हिन्दी
                </option>
              </select>
            </div>
          </div>
        </div>

        <p class="footer-country">Netflix India</p>
      </div>
    </>
  );
};

export default Footer;
