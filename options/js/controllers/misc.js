// Controller for Our Projects page
optionsControllers.controller( 'ProjectsCtrl', function( $scope, $rootScope ) {
  $scope.boolIsNotOperaAddon = ! boolConstIsOperaAddon;

  $scope.arrProjects = [
      {
          strName : 'PoziWorld Elf'
        , strAbbreviation : 'pe'
        , strImageFileName : 'pe-icon-64.png'
          /**
           * @todo More suitable var names
           */
        , strChromeLink : 'https://github.com/PoziWorld/PoziWorld-Elf'
        , strOperaLink : 'https://github.com/PoziWorld/PoziWorld-Elf'
      }
    , {
          strName : 'Scroll To Top Button'
        , strAbbreviation : 'sttb'
        , strImageFileName : 'sttb-icon-50.svg'
        , strChromeLink : 'https://chrome.google.com/webstore/detail/scroll-to-top-button/chinfkfmaefdlchhempbfgbdagheknoj'
        , strOperaLink : 'https://addons.opera.com/extensions/details/scroll-to-top-button/'
      }
    , {
          strName : 'Print Waste Minimizer'
        , strAbbreviation : 'pwm'
        , strImageFileName : 'pwm-icon-128.svg'
        , strChromeLink : 'https://chrome.google.com/webstore/detail/print-waste-minimizer/nhglpabogkpplpcemgiaopjoehcpajdk'
        , strOperaLink : 'https://addons.opera.com/extensions/details/print-waste-minimizer/'
      }
  ];

  Page.localize( strPage, '#content' );

  strSubpage = 'projects';
  strSubsection = undefined;

  Page.trackPageView( strSubpage );

  $rootScope.toggleExternalLinksListeners(
      true
    , 'content'
    , strPage
    , strSubpage
  );
} );

// Controller for Contribution page
optionsControllers.controller( 'ContributionCtrl', function( $scope, $rootScope ) {
  Page.localize( strPage, '#content' );

  strSubpage = 'contribution';
  strSubsection = undefined;

  Page.trackPageView( strSubpage );

  $rootScope.toggleExternalLinksListeners(
      true
    , 'content'
    , strPage
    , strSubpage
  );

  document.getElementById( 'installationLink' ).href = strConstInstallationUrl;
  document.getElementById( 'rateLink' ).href = strConstRateUrl;
} );

// Controller for Feedback page
optionsControllers.controller( 'FeedbackCtrl', function( $scope, $rootScope ) {
  Page.localize( strPage, '#content' );

  strSubpage = 'feedback';
  strSubsection = undefined;

  Page.trackPageView( strSubpage );

  $rootScope.toggleExternalLinksListeners(
      true
    , 'content'
    , strPage
    , strSubpage
  );

  document.getElementById( 'reviewLink' ).href = strConstRateUrl;
  document.getElementById( 'bugLink' ).href = strConstBugsUrl;
  document.getElementById( 'incentiveLink' ).href = objConst.strIncentiveCarrotUrl;
} );

// Controller for About page
optionsControllers.controller( 'AboutCtrl', function( $scope, $rootScope ) {
  document.getElementById( 'logo' ).alt = strConstExtensionName;
  document.getElementById( 'name' ).textContent = strConstExtensionName;
  document.getElementById( 'version' ).textContent = strConstExtensionVersionName;

  const $$translatedBy = document.getElementById( 'translatedBy' );

  Page.localize( strPage, '#content' );

  document.querySelector( '[data-id="translation"]' ).href = strConstTranslationUrl;
  $$translatedBy.innerHTML = $$translatedBy.innerHTML.replace(
      // Markdown-style link: [John Doe](https://www.transifex.com/user/profile/john.doe777/)
      /(\[)([^\]]+\.?)(\])(\()(http[s]:\/\/(-\.)?([^\s\/?\.\#\-]+\.?)+(\/[^\s]*)?)(\))/g
    , '<a href="$5" target="_blank" class="externalLink" data-id="translator" data-params="{ &quot;strTranslator&quot; : &quot;$2&quot; }">$2</a>'
  );

  strSubpage = 'about';
  strSubsection = undefined;

  Page.trackPageView( strSubpage );

  $rootScope.toggleExternalLinksListeners(
      true
    , 'content'
    , strPage
    , strSubpage
  );
} );

// Controller for Help page
optionsControllers.controller( 'HelpCtrl', function( $scope ) {
  Options.removeNotAvailable();
  Page.localize( strPage, '#content' );

  strSubpage = 'help';
  strSubsection = undefined;

  Page.trackPageView( 'help' );

  // Show debug info
  var strHtml = '';

  for ( var miscProperty in objConstUserSetUp ) {
    if ( objConstUserSetUp.hasOwnProperty( miscProperty ) ) {
      strHtml += Page.template(
          'helpInfoToSubmitTmpl'
        , {
              key   : miscProperty
            , value : objConstUserSetUp[ miscProperty ]
          }
      );
    }
  }

  if ( strHtml !== '' )
    document.getElementById( strHelpInfoToSubmitId ).innerHTML = strHtml;
} );

// Controller for ❤ page
optionsControllers.controller( '❤Ctrl', function( $scope ) {
  document.getElementById( 'header' ).hidden = true;
  document.getElementById( 'toolbar' ).hidden = true;
  document.getElementById( 'footer' ).hidden = true;

  const $$ascii = document.getElementById( '❤❤' );
  const strReadyAttribute = 'data-ready';
  const boolIsReady = JSON.parse( $$ascii.getAttribute( strReadyAttribute ) );

  if ( ! boolIsReady ) {
    $$ascii.textContent = window.atob( $$ascii.textContent );
    $$ascii.setAttribute( strReadyAttribute, true );
  }

  strSubpage = '❤';
  strSubsection = undefined;

  Page.trackPageView( '❤' );
} );
