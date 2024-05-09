import React from 'react';

import CookiePolicyBanner from '@edx/frontend-component-cookie-policy-banner';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getLocale } from '@edx/frontend-platform/i18n';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const BaseComponent = ({ children, showWelcomeBanner }) => {
  const authenticatedUser = showWelcomeBanner ? getAuthenticatedUser() : null;

  return (
    <>
      {getConfig().ENABLE_COOKIE_POLICY_BANNER ? <CookiePolicyBanner languageCode={getLocale()} /> : null}
      <div className="col-md-12 extra-large-screen-top-stripe" />
      <div className="layout">
        <div className={classNames('content', { 'align-items-center mt-0': authenticatedUser })}>
          {children}
        </div>
      </div>
    </>
  );
};

BaseComponent.defaultProps = {
  showWelcomeBanner: false,
};

BaseComponent.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeBanner: PropTypes.bool,
};

export default BaseComponent;
