<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nc130_dev2' );

/** MySQL database username */
define( 'DB_USER', 'nc130_cocq_sefai' );

/** MySQL database password */
define( 'DB_PASSWORD', 'KpMPPM$kdhMc' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'dmplqe.% C=hTJY/sIhdae/55>>ErP-Mk_1)o-L5n*9S%@vDg+Wk5NVGRL(CC_ Q');
define('SECURE_AUTH_KEY',  'M~T|-a)7gvE0{Sj1Z(O*?Ys1w3m_]I=5l/j!0l/S|@{5Z&maSUBl26]y9=e-btA}');
define('LOGGED_IN_KEY',    '&)=B8_#hEVlFn|*}84OA%yI@^^qUIdTOq<fpV7);Md;>Bkp-N65wvwn^]z<}FsTC');
define('NONCE_KEY',        'Zz,@&TnGaup_LD#;++_~){372 RhC42Px,YOu SNHD}H%f+,pW*ZA2P:lnq{D_f_');
define('AUTH_SALT',        '-vq#omn)}soeRS1,/b6C6fkS9p]|s<rf*~Xu+3vNG^)y_&wnHwwBZ9xdD$l[oCa1');
define('SECURE_AUTH_SALT', 'o==2rpESWX#(%nGUt07fqR-Fr|QQlHDP?k$JML4Rz.lHIwyxl6Fsw8<jZ?syBg~<');
define('LOGGED_IN_SALT',   '<vU]S5/tSZ]sx}a8.MFz>ml@DfZ8`fb<#/;,EqKc<$<!<8PJell+.Cc/Ws~/O7- ');
define('NONCE_SALT',       '&/6$FqelaKhIMcqgqqhq*#DV*c^!F?Fr^%+Y$X5K>]W&@<fuK6w[t=f&v}^5b,+6');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'sd_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
