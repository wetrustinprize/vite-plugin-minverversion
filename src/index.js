const util = require("util");
const exec = util.promisify(require("child_process").exec);

/**
 * Gets the minver version of the project and adds to the "define" section of the vite config.
 * If minver is not installed, it will fallback to the package.json version.
 */
const minverVersion = async () => (
    {
        name: "minverVersion",
        config: async () => {
            let minverVersion = process.env.npm_package_version;

            try {
                const {stdout, stderr} = await exec("minver -v e")

                if (stderr)
                    throw new Error(stderr);

                minverVersion = stdout.replace("\n", "");
            } catch (e) {
                console.error("An error occurred while trying to get the minver version: ", e);
                console.warn("If you don't have minver installed in your system, please install it with nuget:")
                console.warn("$ dotnet tool install --global minver-cli --version 4.3.0");
                console.warn("The version will fallback to the package.json version.");
            }

            return {
                define: {
                    MINVER_VERSION: JSON.stringify(minverVersion)
                }
            }
        }
    });

module.exports = minverVersion;
