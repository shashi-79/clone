#!/bin/sh

npx create-next-app@latest

npm install -D  autoprefixer 


cat <<'EOF' >.tmp && mv .tmp "./postcss.config.mjs"
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

export default config;
EOF


npm create storybook@latest
npm install -D storybook-addon-tailwind-autodocs
npm install --save @icon/icofont boxicons remixicon aos @fontsource/montserrat  @fontsource/open-sans  @fontsource/poppins 


cat <<'EOF' | cat - ./.storybook/preview.ts >.tmp && mv .tmp "./.storybook/preview.ts"
import "../src/app/globals.css";
EOF


cat <<'EOF' >.tmp && mv .tmp "./src/app/globals.css"
@import "tailwindcss";

@import "boxicons/css/boxicons.min.css";
@import "remixicon/fonts/remixicon.css";
@import "@icon/icofont/icofont.css";
@import "@fontsource/open-sans/index.css";
@import "@fontsource/montserrat/index.css";
@import "@fontsource/poppins/index.css";

@theme {
  --font-open-sans: 'Open Sans', sans-serif;
  --font-montserrat: 'Montserrat', sans-serif;
  --font-poppins: 'Poppins', sans-serif;
  --font-icofont: 'IcoFont';

  /* Orange */
  --color-c-orange-5: #ed3c0d;

  /* Indigo */
  --color-c-indigo-5: #3f43fd;

  /* Blue (dark to light) */
  --color-c-blue-0: #010246;
  --color-c-blue-1: #010351;
  --color-c-blue-2: #01036f;
  --color-c-blue-3: #010479;
  --color-c-blue-4: #010483;
  --color-c-blue-5: #0205a1;
  --color-c-blue-6: #0d12fc;
  --color-c-blue-7: #2a34ff;
  --color-c-blue-8: #6c7dff;
  --color-c-blue-9: #aab4ff;

  /* Green (dark to light) */
  --color-c-green-0: #149f6e;
  --color-c-green-1: #17b57d;
  --color-c-green-2: #18d26e;
  --color-c-green-3: #1acc8d;
  --color-c-green-4: #2be4a2;
  --color-c-green-5: #34e5a6;
  --color-c-green-6: #4be8b0;
  --color-c-green-7: #61ebba;
  --color-c-green-8: #7ceec6;
  --color-c-green-9: #d2f9eb;

  /* Gray (dark to light) */
  --color-c-gray-0: #343a40;
  --color-c-gray-1: #444444;
  --color-c-gray-2: #777777;
  --color-c-gray-3: #aaaaaa;
  --color-c-gray-4: #bababa;
  --color-c-gray-5: #ccc;
  --color-c-gray-6: #ddd;
  --color-c-gray-7: #eee;
  --color-c-gray-8: #f5f5ff;
  --color-c-gray-9: #ffffff;
}

EOF

:'

# overwritting

cat <<EOF >filename.txt
This is the first new line.
This is the second new line.
EOF

# appending

cat <<EOT >>filename.txt
This is a new line to append.
Another line is appended here.
EOT

# insert at start

cat << 'EOF' | cat - yourfile.txt > tmp && mv tmp yourfile.txt
# === Auto-generated Header ===
# Author: DevOps Team
# Date: $(date +%Y-%m-%d)
EOF

# multiline string

read -d '\n' multilinestring << EndOfText
Line 1
Line 2
Line 3
EndOfText

echo "$multilinestring"

# parameter

$1,$2
"${1}${2}"

#

'
