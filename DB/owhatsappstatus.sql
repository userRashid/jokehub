-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2016 at 08:27 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `owhatsappstatus`
--

-- --------------------------------------------------------

--
-- Table structure for table `wa_api_token`
--

CREATE TABLE IF NOT EXISTS `wa_api_token` (
  `u_id` int(50) NOT NULL,
  `token` varchar(100) NOT NULL,
  `duration` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wa_api_token`
--

INSERT INTO `wa_api_token` (`u_id`, `token`, `duration`) VALUES
(1, '', '0000-00-00 00:00:00'),
(2, '', '0000-00-00 00:00:00'),
(3, '1be2a52662223fb01872f08c0d928c5c', '2015-08-02 19:05:49');

-- --------------------------------------------------------

--
-- Table structure for table `wa_bank_detail`
--

CREATE TABLE IF NOT EXISTS `wa_bank_detail` (
  `u_id` int(50) NOT NULL,
  `b_ac_name` text NOT NULL,
  `b_ac_no` varchar(100) NOT NULL,
  `b_ifce` varchar(100) NOT NULL,
  `b_bank_name` text NOT NULL,
  `b_branch` text NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wa_bank_detail`
--

INSERT INTO `wa_bank_detail` (`u_id`, `b_ac_name`, `b_ac_no`, `b_ifce`, `b_bank_name`, `b_branch`) VALUES
(0, '', '', '', '', ''),
(2, 'aaaa', 'aaa', 'aaa', 'aaa', 'aaa'),
(5, 'llkj', 'lkj', 'lk', 'l', 'lkj'),
(6, 'Rashid', '11346789', 'No123', 'Axis', 'Noida');

-- --------------------------------------------------------

--
-- Table structure for table `wa_category`
--

CREATE TABLE IF NOT EXISTS `wa_category` (
  `c_id` int(10) NOT NULL AUTO_INCREMENT,
  `n_id` int(10) NOT NULL,
  `se_id` int(11) NOT NULL,
  `c_description` text NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `wa_category`
--

INSERT INTO `wa_category` (`c_id`, `n_id`, `se_id`, `c_description`) VALUES
(1, 1, 1, 'Friendship is the most important part of our life , Show your love for friends with our most beautiful friendship whatsapp status .'),
(4, 2, 2, 'Show your Fun with the best and latest funny whatsapp status on this website.'),
(5, 3, 1, 'Love whatsapp status quotes and updates- Love Quotes, Sad Love One Liners and Romantic sayings for her, him, girlfriend, boyfriends, wife and couples.- Short Love Quotes to Share on Whatsapp'),
(8, 4, 0, 'Rain Status for whatsapp and fb provides you the most beautiful and cool rain status for whatsapp and facebook , rain quotes for whatsapp ,rain quotes tumblr ,rainy day status , rain quotes for fb in english , rain status for whatsapp in hindi , love rain quotes ,rainy days quotes tumblr and pinterest ,romantic rain status and lots more'),
(9, 18, 7, 'sdfsdfsd'),
(10, 19, 8, 'Updated'),
(11, 20, 9, 'This is Noida'),
(12, 21, 10, 'djdjff'),
(13, 22, 11, 'asdfj kashd kfasldkfha djfsdad lldfsakjf'),
(14, 23, 12, 'dfg'),
(15, 38, 13, 'gsdfgsdf');

-- --------------------------------------------------------

--
-- Table structure for table `wa_node`
--

CREATE TABLE IF NOT EXISTS `wa_node` (
  `n_id` int(10) NOT NULL AUTO_INCREMENT,
  `n_type` varchar(100) NOT NULL,
  `n_title` text NOT NULL,
  `u_id` int(10) NOT NULL,
  `n_status` tinyint(4) NOT NULL DEFAULT '0',
  `n_create_date` timestamp NOT NULL,
  `n_upadate` timestamp NOT NULL,
  `n_alias` text NOT NULL,
  PRIMARY KEY (`n_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `wa_node`
--

INSERT INTO `wa_node` (`n_id`, `n_type`, `n_title`, `u_id`, `n_status`, `n_create_date`, `n_upadate`, `n_alias`) VALUES
(2, 'category', 'Funny_1', 1, 1, '2015-07-02 19:45:51', '2015-08-02 06:02:29', 'funny'),
(3, 'category', 'Love', 1, 1, '2015-07-02 19:49:30', '2015-07-15 19:30:50', 'love'),
(4, 'category', 'Rain', 1, 1, '2015-07-02 19:50:21', '2015-07-15 20:09:27', 'rain'),
(5, 'status', '', 1, 1, '2015-07-02 19:58:16', '2015-07-02 19:58:16', ''),
(6, 'status', '', 1, 1, '2015-07-02 19:58:16', '2015-07-02 19:58:16', ''),
(7, 'status', '', 1, 0, '2015-07-02 20:00:28', '2015-07-26 19:49:43', ''),
(8, 'status', '', 1, 1, '2015-07-04 20:17:01', '2015-07-04 20:17:01', ''),
(9, 'category', 'asdf', 1, 0, '2015-07-11 12:32:45', '2015-07-11 12:32:45', 'rashid'),
(10, 'category', 'sadf', 1, 0, '2015-07-11 12:34:44', '2015-07-11 12:34:44', 'rashid'),
(11, 'category', 'dfgdf', 1, 0, '2015-07-11 12:37:02', '2015-07-11 12:37:02', 'rashid'),
(12, 'category', 'asdf', 1, 0, '2015-07-11 12:41:23', '2015-07-11 12:41:23', 'rashid'),
(13, 'category', 'dfsdfg', 1, 0, '2015-07-11 12:44:28', '2015-07-11 12:44:28', 'rashid'),
(14, 'category', 'sdf', 1, 0, '2015-07-11 12:51:36', '2015-07-11 12:51:36', 'rashid'),
(15, 'category', 'asdf', 1, 0, '2015-07-11 12:52:39', '2015-07-11 12:52:39', 'rashid'),
(16, 'category', 'asdf454654', 1, 0, '2015-07-11 12:53:20', '2015-07-11 12:53:20', 'rashid'),
(17, 'category', 'sdf fdsfsdf fds', 1, 0, '2015-07-11 12:58:46', '2015-07-11 12:58:46', 'rashid'),
(18, 'category', 'sdfsd', 1, 1, '2015-07-11 13:00:21', '2015-07-15 19:59:33', 'rashid'),
(19, 'category', 'sds', 1, 1, '2015-07-11 13:01:32', '2015-07-16 16:09:22', 'rashid'),
(20, 'category', 'Noida 123sdfdsf', 1, 1, '2015-07-14 20:54:48', '2015-07-27 15:38:22', 'rashid'),
(21, 'category', 'new info noida', 1, 1, '2015-07-22 03:28:55', '2015-07-22 03:29:44', 'new-info-noida'),
(22, 'category', 'New OOne From me', 1, 1, '2015-07-22 17:51:55', '2015-07-22 17:52:04', 'new-oone-from-me'),
(23, 'category', 'dfg', 1, 0, '2015-07-22 18:56:20', '2015-07-22 18:56:20', 'dfg'),
(24, 'status', '', 1, 1, '2015-07-25 12:16:31', '2015-07-26 18:53:12', ''),
(25, 'status', '', 1, 0, '2015-07-25 12:18:02', '2015-07-26 19:44:19', ''),
(26, 'status', '', 1, 1, '2015-07-27 15:38:34', '2015-07-27 15:38:53', ''),
(27, 'status', '', 1, 0, '2015-08-10 18:51:15', '2015-08-10 18:51:15', ''),
(28, 'status', '', 1, 0, '2015-08-10 18:52:18', '2015-08-10 18:52:18', ''),
(29, 'status', '', 1, 0, '2015-08-10 18:54:46', '2015-08-10 18:54:46', ''),
(30, 'status', '', 1, 0, '2015-08-10 18:55:32', '2015-08-10 18:55:32', ''),
(31, 'status', '', 1, 0, '2015-08-10 18:58:07', '2015-08-10 18:58:07', ''),
(32, 'status', '', 1, 0, '2015-08-10 19:01:45', '2015-08-10 19:01:45', ''),
(33, 'status', '', 1, 0, '2015-08-10 19:03:03', '2015-08-10 19:03:03', ''),
(34, 'status', '', 1, 0, '2015-08-10 19:04:06', '2015-08-10 19:04:06', ''),
(35, 'status', '', 1, 0, '2015-08-10 19:05:46', '2015-08-10 19:05:46', ''),
(36, 'status', '', 3, 1, '2015-08-10 19:08:59', '2015-08-10 19:09:07', ''),
(37, 'status', '', 2, 1, '2015-08-10 19:17:37', '2015-08-10 19:17:45', ''),
(38, 'category', 'sdfgsd', 1, 0, '2016-08-21 09:24:19', '2016-08-21 09:24:19', 'sdfgsd');

-- --------------------------------------------------------

--
-- Table structure for table `wa_seo`
--

CREATE TABLE IF NOT EXISTS `wa_seo` (
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
-- Dumping data for table `wa_seo`
--

INSERT INTO `wa_seo` (`se_id`, `se_title`, `se_meta`, `se_description`, `se_keywords`, `se_og_title`, `se_og_description`, `se_og_image`) VALUES
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
-- Table structure for table `wa_status`
--

CREATE TABLE IF NOT EXISTS `wa_status` (
  `s_id` int(10) NOT NULL AUTO_INCREMENT,
  `n_id` int(10) NOT NULL,
  `c_id` int(10) NOT NULL,
  `s_content` text NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `wa_status`
--

INSERT INTO `wa_status` (`s_id`, `n_id`, `c_id`, `s_content`) VALUES
(1, 5, 5, 'THis is status\r\n'),
(2, 6, 12, 'This is Name___'),
(3, 7, 5, 'dfsd sd fdss fsd fsd'),
(4, 8, 5, 'When the angels ask what I most loved about life, Iâ€™ll say you'),
(5, 24, 10, 'asdfsad dsffadsf fdsa fadsf sdf sdf'),
(6, 25, 5, '123456 879 9'),
(7, 26, 12, 'this is noida'),
(8, 27, 10, 'asdfsadfsd'),
(9, 28, 8, 'asdfasdfads'),
(10, 29, 5, 'asdfsadfsdf'),
(11, 30, 8, 'asdfasdfasdf'),
(12, 31, 5, 'asdfadsf'),
(13, 32, 9, 'zxcvzxcvzxc'),
(14, 33, 10, 'asdfasdf'),
(15, 34, 11, 'zxcvzxcvzxc'),
(16, 35, 8, 'sadfsadf'),
(17, 36, 5, 'This is add by new user'),
(18, 37, 12, 'This is by Rashid');

-- --------------------------------------------------------

--
-- Table structure for table `wa_user`
--

CREATE TABLE IF NOT EXISTS `wa_user` (
  `u_id` int(10) NOT NULL AUTO_INCREMENT,
  `u_email` varchar(100) NOT NULL,
  `u_pwd` varchar(50) NOT NULL,
  `u_status` tinyint(4) NOT NULL DEFAULT '1',
  `u_create_date` int(11) NOT NULL,
  `u_alias` varchar(50) NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `wa_user`
--

INSERT INTO `wa_user` (`u_id`, `u_email`, `u_pwd`, `u_status`, `u_create_date`, `u_alias`) VALUES
(1, 'admin@admin.com', 'admin', 1, 1426698837, 'admin'),
(2, 'rashid@gmail.com', 'info', 1, 0, 'rashid-one'),
(3, 'abhinav@gmail.com', 'abhinav', 0, 0, 'abhinav'),
(4, 'user.rashid@gmail.com', 'info121001', 0, 2147483647, ''),
(5, 'asdfsadfsdfa', 'sdfsadfsdfsadfsad', 0, 2147483647, ''),
(6, 'adf', 'asdf', 0, 2147483647, ''),
(7, 'asd', 'aaaa', 0, 2147483647, ''),
(8, 'asfd', 'asdf', 0, 2147483647, 'asdfasdf-8'),
(9, 'adsf', 'asdf', 0, 2147483647, 'asdfasdf-9'),
(10, 'asdf', 'asdf', 0, 2147483647, 'asdfasdf-10'),
(11, 'asdf', 'adsf', 0, 2147483647, ''),
(12, 'asdf', 'asdf', 0, 2147483647, ''),
(13, 'asdf', 'asdfsad', 0, 2147483647, ''),
(14, 'asdf', 'asdf', 0, 2147483647, ''),
(15, 'dsfg', 'sdfg', 0, 2147483647, ''),
(16, 'asdfasd', 'asdfsadf', 0, 2147483647, 'asdfasdf-16'),
(17, 'sadf', 'sdf', 0, 2147483647, 'sadfsadf-17'),
(18, 'asdf', 'asdf', 0, 2147483647, 'asdfasdf-18'),
(19, 'asdf', 'asdf', 1, 2147483647, 'asdfasdf-19'),
(20, '', '', 0, 2147483647, 'sadfsadfasdfsadf-sdfs-ewrdvsadfsadfasdfsadf-sdfs-e');

-- --------------------------------------------------------

--
-- Table structure for table `wa_user_detail`
--

CREATE TABLE IF NOT EXISTS `wa_user_detail` (
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
-- Dumping data for table `wa_user_detail`
--

INSERT INTO `wa_user_detail` (`u_id`, `u_name`, `ud_country`, `ud_sex`, `ud_about`, `ud_dob`, `ud_title`, `ud_image`, `ud_address`, `ud_phone`) VALUES
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
(20, 'sadfsadfasdfsadf sdfs ewrdv', 0, 0, '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `wa_user_privilege`
--

CREATE TABLE IF NOT EXISTS `wa_user_privilege` (
  `u_id` int(10) NOT NULL,
  `privilege` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wa_user_privilege`
--

INSERT INTO `wa_user_privilege` (`u_id`, `privilege`) VALUES
(1, 'a:3:{i:0;s:1:"1";i:1;s:1:"2";i:2;s:1:"3";}'),
(2, 'a:2:{i:0;s:1:"2";i:1;s:1:"3";}'),
(3, 'a:3:{i:0;s:1:"1";i:1;s:1:"2";i:2;s:1:"3";}'),
(19, 'a:3:{i:0;s:1:"1";i:1;s:1:"2";i:2;s:1:"3";}'),
(20, 'a:3:{i:0;s:1:"1";i:1;s:1:"2";i:2;s:1:"3";}');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;