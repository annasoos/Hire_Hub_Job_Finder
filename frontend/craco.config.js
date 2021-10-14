const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
							"@font-size-base": "18px",
							"@btn-font-weight": "700",
							"@btn-primary-color": "#fff",
							"@btn-primary-bg": "hsl(180, 66%, 49%)",
							"@btn-height-base": "2.5rem",
							"@btn-border-radius-base": "50px",
						 },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};