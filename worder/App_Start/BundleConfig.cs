using System.Web.Optimization;

namespace worder
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                "~/js/vendor/jquery-{version}.js",
                "~/js/vendor/jquery-migrate-{version}.js",
                "~/js/vendor/kinetic-v{version}.js",
                "~/js/vendor/knockout-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                "~/js/vendor/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/mine").Include(
                "~/js/main.js",
                "~/js/plugins.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/js/vendor/modernizr-*"));

            bundles.Add(new StyleBundle("~/bundles/base").Include(
                "~/css/main.css",
                "~/css/normalize.css",
                "~/css/base/jquery-ui-1.10.0.custom.css"));
        }
    }
}