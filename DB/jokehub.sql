-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2016 at 09:02 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jokehub`
--

-- --------------------------------------------------------

--
-- Table structure for table `jh_api_token`
--

CREATE TABLE IF NOT EXISTS `jh_api_token` (
  `u_id` int(50) NOT NULL,
  `token` varchar(100) NOT NULL,
  `duration` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jh_api_token`
--

INSERT INTO `jh_api_token` (`u_id`, `token`, `duration`) VALUES
(1, '', '0000-00-00 00:00:00'),
(2, '', '0000-00-00 00:00:00'),
(3, '1be2a52662223fb01872f08c0d928c5c', '2015-08-02 19:05:49'),
(1, '', '0000-00-00 00:00:00'),
(2, '', '0000-00-00 00:00:00'),
(3, '1be2a52662223fb01872f08c0d928c5c', '2015-08-02 19:05:49');

-- --------------------------------------------------------

--
-- Table structure for table `jh_bank_detail`
--

CREATE TABLE IF NOT EXISTS `jh_bank_detail` (
  `u_id` int(50) NOT NULL,
  `b_ac_name` text NOT NULL,
  `b_ac_no` varchar(100) NOT NULL,
  `b_ifce` varchar(100) NOT NULL,
  `b_bank_name` text NOT NULL,
  `b_branch` text NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jh_bank_detail`
--

INSERT INTO `jh_bank_detail` (`u_id`, `b_ac_name`, `b_ac_no`, `b_ifce`, `b_bank_name`, `b_branch`) VALUES
(0, '', '', '', '', ''),
(2, 'aaaa', 'aaa', 'aaa', 'aaa', 'aaa'),
(5, 'llkj', 'lkj', 'lk', 'l', 'lkj'),
(6, 'Rashid', '11346789', 'No123', 'Axis', 'Noida');

-- --------------------------------------------------------

--
-- Table structure for table `jh_category`
--

CREATE TABLE IF NOT EXISTS `jh_category` (
  `c_id` int(10) NOT NULL AUTO_INCREMENT,
  `n_id` int(10) NOT NULL,
  `mc_id` int(11) NOT NULL,
  `se_id` int(11) NOT NULL,
  `img_id` int(11) NOT NULL,
  `c_description` text NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `jh_category`
--

INSERT INTO `jh_category` (`c_id`, `n_id`, `mc_id`, `se_id`, `img_id`, `c_description`) VALUES
(1, 3, 1, 0, 0, 'Love is like sunshine and Best Love Sms can be a true reflection of your feelings. Romantic Love Sms is the sweet way to express your deepest feelings to your lover, In this section weâ€™ve compiled Romantic Love Sms for Girlfriend, Send these magical words to your loved ones thatâ€™ll bring a golden glow on her face. Just pick up Romantic Sms for Girlfriend, Awesome Love Sms in Hindi, Heart Touching Love Shayari for Her, Pyaar Shayari, Hot Romantic Shayari for Wife, Beautiful Love Messages in Hindi'),
(2, 4, 1, 0, 0, 'FUNNY SMSFUNNY SMSFUNNY SMSFUNNY SMSFUNNY SMSFUNNY SMS'),
(3, 5, 2, 0, 0, 'SANTA BANTA JOKESSANTA BANTA JOKESSANTA BANTA JOKESSANTA BANTA JOKES');

-- --------------------------------------------------------

--
-- Table structure for table `jh_content`
--

CREATE TABLE IF NOT EXISTS `jh_content` (
  `co_id` int(10) NOT NULL AUTO_INCREMENT,
  `n_id` int(10) NOT NULL,
  `c_id` int(10) NOT NULL,
  `mc_id` int(10) NOT NULL,
  `co_content` text NOT NULL,
  PRIMARY KEY (`co_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `jh_content`
--

INSERT INTO `jh_content` (`co_id`, `n_id`, `c_id`, `mc_id`, `co_content`) VALUES
(1, 6, 3, 0, 'Let wind blow away ur sadness\nLet rain wash away ur worries\nLet sun bring u warmth\nLet D new day bring u hope & happiness and Let my SMS make u SMILE...\nNice Day Dear'),
(2, 7, 3, 0, 'A smile is the lighting system of the face;\nThe cooling system of the head;\nAnd the heating system of the heart!'),
(3, 8, 4, 0, 'If God is the DJ, then Life is the dance floor; Love is the rhythm, and You are the melodious music. Have a nice day ahead!'),
(4, 10, 3, 0, 'asdasdasdasdasdasd');

-- --------------------------------------------------------

--
-- Table structure for table `jh_main_category`
--

CREATE TABLE IF NOT EXISTS `jh_main_category` (
  `mc_id` int(11) NOT NULL AUTO_INCREMENT,
  `n_id` int(11) NOT NULL,
  `c_description` text NOT NULL,
  PRIMARY KEY (`mc_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `jh_main_category`
--

INSERT INTO `jh_main_category` (`mc_id`, `n_id`, `c_description`) VALUES
(1, 1, 'Short Message Service (SMS) is a text messaging service component of phone, Web, or mobile communication systems. It uses standardized communications protocols to allow fixed line or mobile phone devices to exchange short text messages.[1]\n\nSMS was the most widely used data application, with an estimated 3.5 billion active users, or about 80% of all mobile phone subscribers at the end of 2010.[2] The term "SMS" is used for both the user activity and all types of short text messaging in many parts of the world. SMS is also employed in direct marketing, known as SMS marketing.[3] As of September 2014, global SMS messaging business is said to be worth over USD 100 billion, and SMS accounts for almost 50 percent of all the revenue generated by mobile messaging.[4]\n\nSMS as used on modern handsets originated from radio telegraphy in radio memo pagers using standardized phone protocols. These were defined in 1985 as part of the Global System for Mobile Communications (GSM) series of standards[5] as a means of sending messages of up to 160 characters to and from GSM mobile handsets. Though most SMS messages are mobile-to-mobile text messages, support for the service has expanded to include other mobile technologies, such as ANSI CDMA networks and Digital AMPS, as well as satellite and landline networks.'),
(2, 2, 'A good joke is succinct, containing no more detail than is needed to set the scene for the punchline at the end. In the case of riddle jokes or one-liners the setting is implicitly understood, leaving only the dialogue and punchline to be verbalized. Identified as one of the simple forms of oral literature by the Dutch linguist AndrÃ© Jolles,[2] jokes are passed along anonymously. They are told in both private and public settings; a single person tells a joke to his friend in the natural flow of conversation, or a set of jokes is told to a group as part of scripted entertainment. Jokes are also passed along in written form orâ€”more recentlyâ€”through electronic messaging systems. Internet joking has indeed become a major method of transmission. Either as written narratives or graphic cartoons, jokes are sent through email to friends and acquaintances; individuals joking with each other in a physical space have been replaced here by electronic social groups. This correlates with the new understanding of the internet as an "active folkloric space" with evolving social and cultural forces and clearly identifiable performers and audiences.[3] Along with individual transmission of jokes to email contacts, internet services are also available to provide a fresh joke-a-day to your email inbox or archive joke collections on electronic bulletin boards.');

-- --------------------------------------------------------

--
-- Table structure for table `jh_node`
--

CREATE TABLE IF NOT EXISTS `jh_node` (
  `n_id` int(10) NOT NULL AUTO_INCREMENT,
  `n_type` varchar(100) NOT NULL,
  `n_title` text NOT NULL,
  `u_id` int(10) NOT NULL,
  `n_status` tinyint(4) NOT NULL DEFAULT '0',
  `n_create_date` timestamp NOT NULL,
  `n_upadate` timestamp NOT NULL,
  `n_alias` text NOT NULL,
  PRIMARY KEY (`n_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `jh_node`
--

INSERT INTO `jh_node` (`n_id`, `n_type`, `n_title`, `u_id`, `n_status`, `n_create_date`, `n_upadate`, `n_alias`) VALUES
(1, 'main-category', 'SMS', 1, 1, '2016-09-06 17:02:38', '2016-09-06 17:02:41', 'sms'),
(2, 'main-category', 'JOKES', 1, 1, '2016-09-06 17:04:32', '2016-09-06 17:04:55', 'jokes'),
(3, 'category', 'Love SMS', 1, 1, '2016-09-06 17:06:49', '2016-09-06 17:06:52', 'love-sms'),
(4, 'category', 'FUNNY SMS', 1, 1, '2016-09-06 17:07:43', '2016-09-06 17:07:52', 'funny-sms'),
(5, 'category', 'SANTA BANTA JOKES', 1, 1, '2016-09-06 17:09:18', '2016-09-06 17:09:20', 'santa-banta-jokes'),
(6, 'joke', 'SMS1', 1, 1, '2016-09-06 17:13:40', '0000-00-00 00:00:00', 'sms1'),
(7, 'joke', 'SMS2', 1, 1, '2016-09-06 17:14:10', '0000-00-00 00:00:00', 'sms2'),
(8, 'joke', 'SMS3', 1, 1, '2016-09-06 17:15:13', '0000-00-00 00:00:00', 'sms3'),
(9, 'joke', 'jokes1', 1, 1, '2016-09-06 17:49:08', '0000-00-00 00:00:00', 'jokes1'),
(10, 'content', 'joke454545', 1, 1, '2016-09-06 18:54:42', '0000-00-00 00:00:00', 'joke454545');

-- --------------------------------------------------------

--
-- Table structure for table `jh_seo`
--

CREATE TABLE IF NOT EXISTS `jh_seo` (
  `se_id` int(10) NOT NULL AUTO_INCREMENT,
  `se_title` text NOT NULL,
  `se_meta` text NOT NULL,
  `se_description` text NOT NULL,
  `se_keywords` text NOT NULL,
  `se_og_title` text NOT NULL,
  `se_og_description` text NOT NULL,
  `se_og_image` text NOT NULL,
  PRIMARY KEY (`se_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `jh_seo`
--

INSERT INTO `jh_seo` (`se_id`, `se_title`, `se_meta`, `se_description`, `se_keywords`, `se_og_title`, `se_og_description`, `se_og_image`) VALUES
(1, 'THis is test', '', 'Tshid', 'skdf', 'dskjf', 'sdkf', 'navigationIcon.png'),
(2, 'fsa', '', 'h', 'h', 'h', 'h', 'navigationIcon.png'),
(3, 'dsfg', '', 'sdfg', 'sfdg', 'sdfg', 'sdfgsdfg', ''),
(4, 'asdf', '', 'asdf', 'asdf', 'asdf', 'sadf', ''),
(5, 'Rahid', '', 'Rahidasdf', 'sldkfjasdf', 'slkdjSLKFasdf', '54654sadf', ''),
(6, 'sadf', '', 'sdf', 'sdfsv dfd', 'sdsd fdf', 'sdf gd', ''),
(7, 'dsfsd', '', 'fsdfsd', 'sdfdsf', 'sdfsd', 'sdfdsf', ''),
(8, 'sd', '', 'sdsd', 'sds', 'sds', 'sdsds', ''),
(9, 'this is page title', '', 'This is page Dec', 'this is keyword', 'This is OG', 'OG Decdfdsfdsf', ''),
(10, 'sdfl', '', 'll', 'll', 'lll', 'll', ''),
(11, 'New Data', '', 'Old Data', 'jkdk', 'dfkjsdfk sldk fjdskf dflsj f  lsdjfk', 'dfsjd sdfjkls sdflk df', ''),
(12, 'dfg', '', 'dfg', 'dfg', 'dfg', 'dfg', ''),
(13, 'dfgds', '', 'gsdfgsd', 'fgsdfgs', 'sdfgdfg', 'sdfgsdfg', '');

-- --------------------------------------------------------

--
-- Table structure for table `jh_user`
--

CREATE TABLE IF NOT EXISTS `jh_user` (
  `u_id` int(10) NOT NULL AUTO_INCREMENT,
  `u_email` varchar(100) NOT NULL,
  `u_pwd` varchar(50) NOT NULL,
  `u_status` tinyint(4) NOT NULL DEFAULT '1',
  `u_create_date` int(11) NOT NULL,
  `u_alias` varchar(50) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `jh_user`
--

INSERT INTO `jh_user` (`u_id`, `u_email`, `u_pwd`, `u_status`, `u_create_date`, `u_alias`) VALUES
(1, 'admin', 'admin', 1, 1426698837, 'admin'),
(2, 'rashid', 'info', 1, 0, 'rashid-one'),
(4, 'user', '123', 0, 2147483647, '');

-- --------------------------------------------------------

--
-- Table structure for table `jh_user_detail`
--

CREATE TABLE IF NOT EXISTS `jh_user_detail` (
  `u_id` int(10) NOT NULL,
  `u_name` varchar(100) NOT NULL,
  `ud_country` int(50) NOT NULL,
  `ud_sex` int(10) NOT NULL,
  `ud_about` text NOT NULL,
  `ud_dob` varchar(50) NOT NULL,
  `ud_title` text NOT NULL,
  `ud_image` text NOT NULL,
  `ud_address` text NOT NULL,
  `ud_phone` varchar(100) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jh_user_detail`
--

INSERT INTO `jh_user_detail` (`u_id`, `u_name`, `ud_country`, `ud_sex`, `ud_about`, `ud_dob`, `ud_title`, `ud_image`, `ud_address`, `ud_phone`) VALUES
(1, 'Admin', 1, 1, 'The following words by Andrew Carnegie always make me rethink my life at any and all major crossroads that approach. I am certain, that these words will influence your life as well.', '2-5-88', 'This is Rahi', '', 'sssa', 'aaa'),
(2, 'Rashid', 1, 0, 'sdjflkjdsk', '15-6-2015', 'asdfklajsdlkfjas', '', 'skdfjsdkljflksdjlk', 'lkj'),
(3, 'Abhinav', 1, 0, 'Infoigain', '25-24-23', 'THis is noida', '', 'ssss', 'kj'),
(6, 'sadf', 0, 0, 'asdf', 'sdf', 'asdf', '', 'asdf', 'asdfasdf'),
(7, 'aaa', 0, 0, 'aaa', 'aaa', 'aa', '', 'aaa', 'aaaa'),
(8, 'asdf', 0, 0, 'asdf', 'asdf', 'asdf', '', 'asdf', 'sadf'),
(9, 'asdf', 0, 0, 'asdf', '', 'asdf', '', 'asdf', 'asdf'),
(10, 'asdf', 0, 0, 'sadf', 'asdf', 'asdf', '', 'asfd', 'asdf'),
(16, 'asdf', 0, 0, 'asdf', 'asdf', 'asdf', '', 'asdf', 'asdfasd'),
(17, 'sadf', 0, 0, 'sadf', '', 'sadf', '', 'sdf', 'sadf'),
(18, 'asdf', 0, 0, 'asdf', 'asdf', 'asdf', '', 'asdf', 'asdfasdf'),
(19, 'Faheem', 0, 1, 'This is name and you can save something here', 'asdf', 'asdf', '', 'asdf', 'asdf'),
(20, 'sadfsadfasdfsadf sdfs ewrdv', 0, 0, '', '', '', '', '', ''),
(23, 'sdsd', 0, 0, '', '', '', '', '', 'sdfsd'),
(24, 'sCFAS', 0, 0, '', '', '', '', '', 'ASDa'),
(25, 'sCFAS', 0, 0, '', '', '', '', '', 'ASDa'),
(26, 'sCFAS', 0, 0, '', '', '', '', '', 'ASDa'),
(27, 'sCFAS', 0, 0, '', '', '', '', '', 'ASDa'),
(28, 'sCFAS', 0, 0, '', '', '', '', '', 'ASDa'),
(29, 'sCFAS', 0, 0, '', '', '', '', '', 'ASDa'),
(30, 'sCFAS', 0, 0, '', '', '', '', '', 'ASDa'),
(31, 'imran', 0, 0, '', '', '', '', '', '89898898');

-- --------------------------------------------------------

--
-- Table structure for table `jh_user_privilege`
--

CREATE TABLE IF NOT EXISTS `jh_user_privilege` (
  `u_id` int(10) NOT NULL,
  `privilege` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jh_user_privilege`
--

INSERT INTO `jh_user_privilege` (`u_id`, `privilege`) VALUES
(1, 'a:3:{i:0;s:1:"1";i:1;s:1:"2";i:2;s:1:"3";}'),
(2, 'a:2:{i:0;s:1:"2";i:1;s:1:"3";}'),
(3, 'a:3:{i:0;s:1:"1";i:1;s:1:"2";i:2;s:1:"3";}'),
(19, 'a:3:{i:0;s:1:"1";i:1;s:1:"2";i:2;s:1:"3";}'),
(20, 'a:3:{i:0;s:1:"1";i:1;s:1:"2";i:2;s:1:"3";}'),
(23, 'a:1:{i:0;i:0;}'),
(24, 'a:1:{i:0;i:0;}'),
(25, 'a:1:{i:0;i:0;}'),
(26, 'a:1:{i:0;i:0;}'),
(27, 'a:1:{i:0;i:0;}'),
(28, 'a:1:{i:0;i:0;}'),
(29, 'a:1:{i:0;i:0;}'),
(30, 'a:1:{i:0;i:0;}'),
(31, 'a:1:{i:0;i:0;}');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
