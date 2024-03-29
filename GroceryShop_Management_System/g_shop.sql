-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2022 at 07:18 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `g_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `owner` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `name`, `owner`, `address`, `contact`) VALUES
(1, 'Fresho Grocery Shop', 'Ali Shaikh', 'Shop no 1, in front of North Point School, Vidyanagri, Deopur, 424005 Dhule, Maharashtra ', '9823402719');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `unit_msr` varchar(50) DEFAULT NULL,
  `rate` double(9,2) DEFAULT NULL,
  `file_path` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `type`, `name`, `unit_msr`, `rate`, `file_path`) VALUES
(3, 'Fruits', 'Apple', 'KG', 80.00, 'uploads\\products\\Apple-Fruits\\profile.jpg'),
(4, 'Vegetables', 'Potato', 'KG', 40.00, 'uploads\\products\\Potato-Fruits\\profile.jpg'),
(5, 'Dairy Product', 'Amul Milk', 'Ltr', 50.00, 'uploads\\products\\Amul Milk-Dairy Product\\profile.png'),
(6, 'Other Items', 'Tata Salt', 'KG', 35.00, 'uploads\\products\\Tata Salt-Other Items\\profile.jpg'),
(7, 'Vegetables', 'Tomato', 'KG', 45.00, 'uploads\\products\\Tomato-Vegetables\\profile.jpg'),
(8, 'Fruits', 'Banana', 'Pcs', 30.00, 'uploads\\products\\Banana-Fruits\\profile.jpg'),
(9, 'Dairy Product', 'Amul Butter', 'KG', 80.00, 'uploads\\products\\Amul Butter-Dairy Product\\profile.jpeg'),
(10, 'Other Items', 'Aashirvaad Atta ', 'KG', 40.00, 'uploads\\products\\Aashirvaad Atta -Other Items\\profile.webp'),
(11, 'Dairy Product', 'Amul Mitahi Mate', 'Pcs', 140.00, 'uploads\\products\\Amul Mitahi Mate-Dairy Product\\profile.jpg'),
(12, 'Fruits', 'Grapes', 'KG', 60.00, 'uploads\\products\\Grapes-Fruits\\profile.jpg'),
(13, 'Vegetables', 'Ladyfinger', 'KG', 45.00, 'uploads\\products\\Ladyfinger-Vegetables\\profile.jpg'),
(14, 'Fruits', 'Custard Apple', 'KG', 70.00, 'uploads\\products\\Custard Apple-Fruits\\profile.jpg'),
(15, 'Other Items', 'Red Label Tea', 'KG', 180.00, 'uploads\\products\\Red Label Tea-Other Items\\profile.webp'),
(16, 'Vegetables', 'Beetroot', 'KG', 80.00, 'uploads\\products\\Beetroot-Vegetables\\profile.jpg'),
(17, 'Vegetables', 'Cabbage', 'KG', 35.00, 'uploads\\products\\Cabbage-Vegetables\\profile.jpg'),
(18, 'Vegetables', 'Cauliflower', 'KG', 60.00, 'uploads\\products\\Cauliflower-Vegetables\\profile.jpg'),
(19, 'Fruits', 'Blackberry', 'KG', 90.00, 'uploads\\products\\Blackberry-Fruits\\profile.jpg'),
(20, 'Fruits', 'Kimia Dates', 'KG', 130.00, 'uploads\\products\\Kimia Dates-Fruits\\profile.jpg'),
(21, 'Dairy Product', 'Amul Cheese', 'Pcs', 90.00, 'uploads\\products\\Amul Cheese-Dairy Product\\profile.png'),
(22, 'Other Items', 'Sunflower Oil', 'Ltr', 155.00, 'uploads\\products\\Sunflower Oil-Other Items\\profile.jpg'),
(23, 'Fruits', 'Blueberry', 'KG', 95.00, 'uploads\\products\\Blueberry-Fruits\\profile.jpg'),
(24, 'Fruits', 'Kiwi', 'KG', 240.00, 'uploads\\products\\Kiwi-Fruits\\profile.jpg'),
(25, 'Other Items', 'Madhur Sugar', 'KG', 45.00, 'uploads\\products\\Madhur Sugar-Other Items\\profile.jpg'),
(26, 'Vegetables', 'Carrot', 'KG', 65.00, 'uploads\\products\\Carrot-Vegetables\\profile.jpg'),
(27, 'Fruits', 'Fig ', 'KG', 85.00, 'uploads\\products\\Fig -Fruits\\profile.jpg'),
(28, 'Fruits', 'Black Grapes', 'KG', 70.00, 'uploads\\products\\Black Grapes-Fruits\\profile.jpg'),
(29, 'Fruits', 'Muskmelon', 'KG', 85.00, 'uploads\\products\\Muskmelon-Fruits\\profile.jpg'),
(30, 'Fruits', 'Dragon Fruit', 'Pcs', 35.00, 'uploads\\products\\Dragon Fruit-Fruits\\profile.jpg'),
(31, 'Fruits', 'Cherry', 'KG', 175.00, 'uploads\\products\\Cherry-Fruits\\profile.jpg'),
(32, 'Fruits', 'Guava', 'KG', 80.00, 'uploads\\products\\Guava-Fruits\\profile.jpg'),
(33, 'Vegetables', 'Cucumber', 'KG', 20.00, 'uploads\\products\\Cucumber-Vegetables\\profile.jpg'),
(34, 'Vegetables', 'Onion', 'KG', 25.00, 'uploads\\products\\Onion-Vegetables\\profile.jpg'),
(35, 'Vegetables', 'Pumpkin', 'KG', 20.00, 'uploads\\products\\Pumpkin-Vegetables\\profile.jpg'),
(36, 'Dairy Product', 'Amul Fresh Cream', 'Ltr', 190.00, 'uploads\\products\\Amul Fresh Cream-Dairy Product\\profile.webp'),
(37, 'Dairy Product', 'Amul Cow Ghee', 'Ltr', 450.00, 'uploads\\products\\Amul Cow Ghee-Dairy Product\\profile.webp'),
(38, 'Other Items', 'Jaggery', 'KG', 70.00, 'uploads\\products\\Jaggery-Other Items\\profile.png'),
(39, 'Other Items', 'Rasna (serves 20 glass)', 'Pcs', 60.00, 'uploads\\products\\Rasna (serves 20 glass)-Other Items\\profile.jpg'),
(40, 'Other Items', 'Rooh Afza', 'Ltr', 160.00, 'uploads\\products\\Rooh Afza-Other Items\\profile.webp'),
(41, 'Fruits', 'Litchi', 'KG', 380.00, 'uploads\\products\\Litchi-Fruits\\profile.jpg'),
(42, 'Fruits', 'Mango', 'KG', 140.00, 'uploads\\products\\Mango-Fruits\\profile.jpg'),
(43, 'Fruits', 'Orange', 'KG', 70.00, 'uploads\\products\\Orange-Fruits\\profile.jpg'),
(44, 'Fruits', 'Papaya', 'Pcs', 40.00, 'uploads\\products\\Papaya-Fruits\\profile.jpg'),
(45, 'Fruits', 'Pears', 'KG', 85.00, 'uploads\\products\\Pears-Fruits\\profile.jpg'),
(46, 'Vegetables', 'Radish', 'KG', 45.00, 'uploads\\products\\Radish-Vegetables\\profile.jpg'),
(47, 'Vegetables', 'Spinach', 'Pcs', 25.00, 'uploads\\products\\Spinach-Vegetables\\profile.jpg'),
(48, 'Vegetables', 'Sweet Potato', 'KG', 65.00, 'uploads\\products\\Sweet Potato-Vegetables\\profile.jpg'),
(49, 'Dairy Product', 'Amul Buttermilk', 'Ltr', 45.00, 'uploads\\products\\Amul Buttermilk-Dairy Product\\profile.jpg'),
(50, 'Dairy Product', 'Amul Dahi', 'Pcs', 30.00, 'uploads\\products\\Amul Dahi-Dairy Product\\profile.jpg'),
(51, 'Fruits', 'Pineapple', 'Pcs', 60.00, 'uploads\\products\\Pineapple-Fruits\\profile.jpg'),
(52, 'Fruits', 'Plum', 'KG', 350.00, 'uploads\\products\\Plum-Fruits\\profile.jpg'),
(53, 'Fruits', 'Pomegranate', 'KG', 110.00, 'uploads\\products\\Pomegranate-Fruits\\profile.jpg'),
(54, 'Fruits', 'Raspberry (2 Pieces)', 'Pcs', 220.00, 'uploads\\products\\Raspberry (2 Pieces)-Fruits\\profile.jpg'),
(55, 'Fruits', 'Watermelon', 'Pcs', 30.00, 'uploads\\products\\Watermelon-Fruits\\profile.jpg'),
(56, 'Other Items', 'Soyabean Oil', 'Ltr', 120.00, 'uploads\\products\\Soyabean Oil-Other Items\\profile.jpg'),
(57, 'Other Items', 'Vinegar', 'Ltr', 55.00, 'uploads\\products\\Vinegar-Other Items\\profile.jpg'),
(58, 'Vegetables', 'Brinjal', 'KG', 25.00, 'uploads\\products\\Brinjal-Vegetables\\profile.jpg'),
(59, 'Vegetables', 'Coriander', 'Pcs', 15.00, 'uploads\\products\\Coriander-Vegetables\\profile.jpg'),
(60, 'Vegetables', 'Methy', 'Pcs', 20.00, 'uploads\\products\\Methy-Vegetables\\profile.jpg'),
(61, 'Vegetables', 'Curry Leaves', 'Pcs', 10.00, 'uploads\\products\\Curry Leaves-Vegetables\\profile.jpg'),
(62, 'Dairy Product', 'Chocolate Milk', 'Ltr', 80.00, 'uploads\\products\\Chocolate Milk-Dairy Product\\profile.jpg'),
(63, 'Fruits', 'Sweet Lemon', 'KG', 65.00, 'uploads\\products\\Sweet Lemon-Fruits\\profile.png'),
(64, 'Vegetables', 'Mushroom ', 'KG', 520.00, 'uploads\\products\\Mushroom-Vegetables\\profile.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

CREATE TABLE `sale` (
  `id` int(11) NOT NULL,
  `invoice_no` varchar(50) DEFAULT NULL,
  `invoice_date` date DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `total_bill` double(9,2) DEFAULT NULL,
  `delivery_charge` double(9,2) DEFAULT NULL,
  `net_amt` double(9,2) DEFAULT NULL,
  `invoice_status` varchar(50) DEFAULT NULL COMMENT 'pending, process, delivered, completed',
  `address` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sale`
--

INSERT INTO `sale` (`id`, `invoice_no`, `invoice_date`, `user_id`, `total_bill`, `delivery_charge`, `net_amt`, `invoice_status`, `address`) VALUES
(8, '1305221', '2022-05-13', 7, 520.00, 0.00, 520.00, 'completed', 'Avishkar colony, Dhule'),
(9, '1305229', '2022-05-13', 7, 260.00, 30.00, 290.00, 'delivered', 'Avishkar colony, Dhule'),
(10, '13052210', '2022-05-13', 8, 710.00, 0.00, 710.00, 'process', 'Sakri Road Dhule'),
(11, '13052211', '2022-05-13', 9, 510.00, 0.00, 510.00, 'process', 'Deopur Dhule'),
(12, '17052212', '2022-05-17', 10, 485.00, 30.00, 515.00, 'completed', 'Prabhat nagar, Dhule '),
(13, '17052213', '2022-05-17', 11, 545.00, 0.00, 545.00, 'delivered', 'Station Road'),
(14, '17052214', '2022-05-17', 12, 580.00, 0.00, 580.00, 'completed', 'Vadjai Road, Dhule'),
(15, '22052215', '2022-05-22', 13, 645.00, 0.00, 645.00, 'pending', '80 Feet Road, Near Shwas hospital, Dhule'),
(16, '22052216', '2022-05-22', 14, 575.00, 0.00, 575.00, 'pending', 'Agra Road, Dhule'),
(17, '22052217', '2022-05-22', 15, 435.00, 30.00, 465.00, 'completed', 'Prabhat nagar, Dhule '),
(18, '22052218', '2022-05-22', 16, 835.00, 0.00, 835.00, 'pending', 'Station Road, Dhule'),
(19, '23052219', '2022-05-23', 17, 430.00, 30.00, 460.00, 'process', 'Natraj Talkies'),
(20, '23052220', '2022-05-23', 18, 240.00, 30.00, 270.00, 'pending', 'Sakri Road Dhule'),
(21, '23052221', '2022-05-23', 19, 180.00, 30.00, 210.00, 'process', 'Deopur Dhule'),
(22, '23052222', '2022-05-23', 20, 525.00, 0.00, 525.00, 'completed', 'Old Dhule'),
(23, '23052223', '2022-05-23', 21, 280.00, 30.00, 310.00, 'completed', 'Station Road'),
(24, '23052224', '2022-05-23', 7, 270.00, 30.00, 300.00, 'pending', 'Avishkar colony'),
(25, '27052225', '2022-05-27', 20, 110.00, 30.00, 140.00, 'completed', 'Deopur Dhule'),
(26, '03062226', '2022-06-03', 23, 1040.00, 0.00, 1040.00, 'completed', 'Datta Mandir Chowkh Deopur'),
(27, '04062227', '2022-06-04', 24, 500.00, 0.00, 500.00, 'completed', 'Phule Colony'),
(28, '04062228', '2022-06-04', 25, 640.00, 0.00, 640.00, 'delivered', 'Malegoan Road'),
(29, '04062229', '2022-06-04', 26, 675.00, 0.00, 675.00, 'pending', 'Sakri Road Dhule');

-- --------------------------------------------------------

--
-- Table structure for table `sale_detail`
--

CREATE TABLE `sale_detail` (
  `id` int(11) NOT NULL,
  `s_id` int(11) DEFAULT NULL,
  `pro_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `rate` double(9,2) DEFAULT NULL,
  `amount` double(9,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sale_detail`
--

INSERT INTO `sale_detail` (`id`, `s_id`, `pro_id`, `qty`, `rate`, `amount`) VALUES
(19, 6, 1, 2, 120.00, 240.00),
(20, 6, 2, 1, 120.00, 120.00),
(21, 7, 1, 1, 120.00, 120.00),
(22, 7, 2, 4, 120.00, 480.00),
(23, 8, 3, 3, 80.00, 240.00),
(24, 8, 11, 2, 140.00, 280.00),
(25, 9, 4, 2, 40.00, 80.00),
(26, 9, 33, 1, 20.00, 20.00),
(27, 9, 59, 1, 15.00, 15.00),
(28, 9, 34, 2, 25.00, 50.00),
(29, 9, 8, 2, 30.00, 60.00),
(30, 9, 6, 1, 35.00, 35.00),
(31, 10, 19, 1, 90.00, 90.00),
(32, 10, 20, 1, 130.00, 130.00),
(33, 10, 30, 1, 35.00, 35.00),
(34, 10, 31, 1, 175.00, 175.00),
(35, 10, 7, 1, 45.00, 45.00),
(36, 10, 18, 1, 60.00, 60.00),
(37, 10, 58, 2, 25.00, 50.00),
(38, 10, 38, 1, 70.00, 70.00),
(39, 10, 57, 1, 55.00, 55.00),
(40, 11, 12, 1, 60.00, 60.00),
(41, 11, 22, 1, 155.00, 155.00),
(42, 11, 27, 1, 85.00, 85.00),
(43, 11, 30, 1, 35.00, 35.00),
(44, 11, 40, 1, 160.00, 160.00),
(45, 11, 59, 1, 15.00, 15.00),
(46, 12, 5, 2, 50.00, 100.00),
(47, 12, 15, 1, 180.00, 180.00),
(48, 12, 25, 1, 45.00, 45.00),
(49, 12, 8, 1, 30.00, 30.00),
(50, 12, 20, 1, 130.00, 130.00),
(51, 13, 16, 2, 80.00, 160.00),
(52, 13, 26, 1, 65.00, 65.00),
(53, 13, 17, 2, 35.00, 70.00),
(54, 13, 34, 1, 25.00, 25.00),
(55, 13, 59, 2, 15.00, 30.00),
(56, 13, 56, 1, 120.00, 120.00),
(57, 13, 6, 1, 35.00, 35.00),
(58, 13, 10, 1, 40.00, 40.00),
(59, 14, 55, 1, 30.00, 30.00),
(60, 14, 54, 2, 220.00, 440.00),
(61, 14, 28, 1, 70.00, 70.00),
(62, 14, 44, 1, 40.00, 40.00),
(63, 15, 11, 1, 140.00, 140.00),
(64, 15, 27, 1, 85.00, 85.00),
(65, 15, 31, 1, 175.00, 175.00),
(66, 15, 54, 1, 220.00, 220.00),
(67, 15, 34, 1, 25.00, 25.00),
(68, 16, 24, 1, 240.00, 240.00),
(69, 16, 20, 1, 130.00, 130.00),
(70, 16, 32, 1, 80.00, 80.00),
(71, 16, 26, 1, 65.00, 65.00),
(72, 16, 59, 1, 15.00, 15.00),
(73, 16, 61, 1, 10.00, 10.00),
(74, 16, 6, 1, 35.00, 35.00),
(75, 17, 5, 1, 50.00, 50.00),
(76, 17, 15, 1, 180.00, 180.00),
(77, 17, 40, 1, 160.00, 160.00),
(78, 17, 25, 1, 45.00, 45.00),
(79, 18, 8, 1, 30.00, 30.00),
(80, 18, 20, 1, 130.00, 130.00),
(81, 18, 24, 1, 240.00, 240.00),
(82, 18, 27, 1, 85.00, 85.00),
(83, 18, 52, 1, 350.00, 350.00),
(84, 19, 14, 1, 70.00, 70.00),
(85, 19, 42, 1, 140.00, 140.00),
(86, 19, 54, 1, 220.00, 220.00),
(87, 20, 7, 1, 45.00, 45.00),
(88, 20, 16, 1, 80.00, 80.00),
(89, 20, 26, 1, 65.00, 65.00),
(90, 20, 34, 1, 25.00, 25.00),
(91, 20, 47, 1, 25.00, 25.00),
(92, 21, 17, 1, 35.00, 35.00),
(93, 21, 18, 1, 60.00, 60.00),
(94, 21, 35, 1, 20.00, 20.00),
(95, 21, 48, 1, 65.00, 65.00),
(96, 22, 8, 2, 30.00, 60.00),
(97, 22, 29, 1, 85.00, 85.00),
(98, 22, 41, 1, 380.00, 380.00),
(99, 23, 22, 1, 155.00, 155.00),
(100, 23, 38, 1, 70.00, 70.00),
(101, 23, 57, 1, 55.00, 55.00),
(102, 24, 5, 1, 50.00, 50.00),
(103, 24, 36, 1, 190.00, 190.00),
(104, 24, 50, 1, 30.00, 30.00),
(105, 25, 8, 1, 30.00, 30.00),
(106, 25, 9, 1, 80.00, 80.00),
(107, 26, 54, 1, 220.00, 220.00),
(108, 26, 24, 1, 240.00, 240.00),
(109, 26, 48, 2, 65.00, 130.00),
(110, 26, 37, 1, 450.00, 450.00),
(111, 27, 5, 1, 50.00, 50.00),
(112, 27, 8, 2, 30.00, 60.00),
(113, 27, 20, 1, 130.00, 130.00),
(114, 27, 9, 1, 80.00, 80.00),
(115, 27, 15, 1, 180.00, 180.00),
(116, 28, 40, 2, 160.00, 320.00),
(117, 28, 62, 4, 80.00, 320.00),
(118, 29, 3, 1, 80.00, 80.00),
(119, 29, 5, 2, 50.00, 100.00),
(120, 29, 15, 1, 180.00, 180.00),
(121, 29, 22, 1, 155.00, 155.00),
(122, 29, 40, 1, 160.00, 160.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` int(11) DEFAULT NULL,
  `username` varchar(256) DEFAULT NULL,
  `email` varchar(1024) DEFAULT NULL,
  `mobile` varchar(12) DEFAULT NULL,
  `first_name` varchar(256) DEFAULT NULL,
  `last_name` varchar(256) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT 1,
  `auth_key` varchar(32) DEFAULT NULL,
  `password_hash` varchar(256) DEFAULT NULL,
  `password_reset_token` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `username`, `email`, `mobile`, `first_name`, `last_name`, `created_on`, `is_active`, `auth_key`, `password_hash`, `password_reset_token`) VALUES
(3, 1, 'Shopkeeper', '', '7276492239', 'Shopkeeper', '', '2020-08-19 18:07:47', 1, NULL, '$2y$10$M1IapEm1ub70kAM9eccaUOyq4PvumRHIsl7QRkEww0ond3MDqnfUq', NULL),
(4, 2, 'faisal@gmail.com', 'faisal@gmail.com', NULL, 'Faisal', 'Ansari', '2020-10-14 22:39:07', 1, NULL, '$2y$10$M1IapEm1ub70kAM9eccaUOyq4PvumRHIsl7QRkEww0ond3MDqnfUq', NULL),
(6, 2, 'farhan123@gmail.com', 'farhan123@gmail.com', '123456789', 'Farhan', 'Ansari', '2022-05-11 13:12:39', 1, NULL, '$2y$13$OhU4qpLGbL3UmAJMA4Wvv.7INzbambREpZiFpg5t4fxhzTq3c8hzC', NULL),
(7, 2, 'faizan789@gmail.com', 'faizan789@gmail.com', '8999100521', 'Faizan', 'Ansari', '2022-05-13 15:15:38', 1, NULL, '$2y$13$3Fj0pudknEK831Ms5YCBhuoBc36q99BwP11hN52nIWcXEZJ439KrK', NULL),
(8, 2, 'aditya123@gmail', 'aditya123@gmail', '7020382045', 'Aditya ', 'Arora', '2022-05-13 15:52:16', 1, NULL, '$2y$13$ahbQ1bPB94vcu7YhOwQ23u./VGveV.gKpmiBMrGaaxtTeXkzc2t1a', NULL),
(9, 2, 'moeen456@gmail.com', 'moeen456@gmail.com', '8421877352', 'Moeen', 'Khan', '2022-05-13 16:40:15', 1, NULL, '$2y$13$8SbJYTDJWicounolTu2Hfea2by3zKttumgJePYeVeKSNtpF9/E27a', NULL),
(10, 2, 'tushar123@gmail.com', 'tushar123@gmail.com', '9518589150', 'Tushar ', 'Patil', '2022-05-17 08:26:34', 1, NULL, '$2y$13$OL3Fshl3peMRDAnVcQcN1eRfRVxNp6AUzKFZlQtxIdgUwjYd6Zfdu', NULL),
(11, 2, 'aadi009@gmail.com', 'aadi009@gmail.com', '9307176945', 'Aditya ', 'Wagh', '2022-05-17 08:42:36', 1, NULL, '$2y$13$ZSS47Uf0E5E6OIRyfNMxXuXaYUc4csNblGFE7KC109IRD/IrurcQm', NULL),
(12, 2, 'gudhe99@gmail.com', 'gudhe99@gmail.com', '9921220486', 'Sojal', 'Gudhe', '2022-05-17 08:49:33', 1, NULL, '$2y$13$XPRU2tg6pCi.N8sDSt1PBeI2cSLwF0wefdTA8LsQ1JvMJgS6l0Mn2', NULL),
(13, 2, 'teju123@gmail.com', 'teju123@gmail.com', '8767461390', 'Tejas', 'Bagul', '2022-05-22 23:13:55', 1, NULL, '$2y$13$QbSG7oY8EEwhV/laE62TvOwchbsALEKlNpYAE7AHK7GNxtAaWM776', NULL),
(14, 2, 'ojas456@mgail.com', 'ojas456@mgail.com', '8482925342', 'Ojas ', 'Jain', '2022-05-22 23:18:20', 1, NULL, '$2y$13$CtRIqWNe5HwxAMNL.VRTbuCszn81zW.FtRBUSEK3lXJvZTyO4Bqyy', NULL),
(15, 2, 'harshal_007@gmail.com', 'harshal_007@gmail.com', '8080082102', 'Harshal', 'Kulkarni', '2022-05-22 23:21:58', 1, NULL, '$2y$13$jJeiqWD4iK9ruxKDKR5dROwn9hVtl25zIs8JcaseQ2kWGGtL1jBDm', NULL),
(16, 2, 'prem_005@gmail.com', 'prem_005@gmail.com', '8668988677', 'Prem', 'Borse', '2022-05-22 23:36:02', 1, NULL, '$2y$13$NYbbambQD0j8oxNRuj.I1e7qsAonuqfajw8JlbSbGTbbQRbroxF5e', NULL),
(17, 2, 'prem789@gmail.com', 'prem789@gmail.com', '9422775320', 'Prem', 'Shinde', '2022-05-22 23:40:19', 1, NULL, '$2y$13$FxVqoktN6oWNsZGWKkkZtOV5DMmlIhVyWcDcxNX8ATQ0IAtGeXFgu', NULL),
(18, 2, 'bhavesh123@gmail.com', 'bhavesh123@gmail.com', '7420038814', 'Bhavesh', 'Patil', '2022-05-23 00:03:56', 1, NULL, '$2y$13$0aUdnaJKXUXD.KmBuThuie2UmoM4E7awBmXPxYDuXaRkgQU3L.10a', NULL),
(19, 2, 'lait123@gmailcom', 'lait123@gmailcom', '9106930925', 'Lalit ', 'Patil', '2022-05-23 00:07:47', 1, NULL, '$2y$13$7Xn2/1KjbIW0WI6xWwC2q.5rcaEsOfQH.R445yZcYHKWWwQNwv.VW', NULL),
(20, 2, 'bhandarkar_jayesh90@gmail.com', 'bhandarkar_jayesh90@gmail.com', '9545040940', 'Jayesh', 'Bhandarkar', '2022-05-23 20:14:13', 1, NULL, '$2y$13$TL4JdMRjcKkjMITGGsmt9e.tLIGxKQumx8OPYDhTWCALMFfpLa4dS', NULL),
(21, 2, 'vivekpatil25@gmail.com', 'vivekpatil25@gmail.com', '7038031821', 'Vivek', 'Patil', '2022-05-23 20:24:18', 1, NULL, '$2y$13$r4Cpj8DoF0NwDp55uFrpju7pVq2xoI934Gvr7S18E8yhwqaFMllpS', NULL),
(22, 2, 'om123@gmail.com', 'om123@gmail.com', '8080633881', 'Om', 'Kadam', '2022-05-27 23:16:44', 1, NULL, '$2y$13$oF.aov.9KLQxiblDFphaQuQO.Jsoex5s23AJzpk4VA9M0COvfeuBm', NULL),
(23, 2, 'vishal005@gmail.com', 'vishal005@gmail.com', '9657934877', 'Vishal', 'Bagal', '2022-06-03 20:15:16', 1, NULL, '$2y$13$MiVo3HBTVnigwygHI.E5DOO45e2QkwEfMmDEXxoeLhjqFjVH.AmrS', NULL),
(24, 2, 'chandu123@gmail.com', 'chandu123@gmail.com', '9875625812', 'Chandrashkear', 'Pawar', '2022-06-04 09:46:46', 1, NULL, '$2y$13$5lxPb4I0FMacwn5DqUGB7OnrtCxlxej0E2FEjz.MuFI8jJH6e8bkG', NULL),
(25, 2, 'natasha2233@gmail.com', 'natasha2233@gmail.com', '9865327402', 'natasha', 'tiwari', '2022-06-04 10:19:30', 1, NULL, '$2y$13$dwBFSCJdlYBz7IKqAzlciePi9U.bJPn1YS5KQli5Fi4NRxQqvr5Tq', NULL),
(26, 2, 'kuldeep@gmail.com', 'kuldeep@gmail.com', '1234567891', 'kuldeep ', 'Patil', '2022-06-04 10:25:27', 1, NULL, '$2y$13$VfFwesPz7K2fqwHQCrqV3e.c6wkGSvv9m1xDdBqj4HXDFGHv6kvwO', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_cart`
--

CREATE TABLE `user_cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `product_id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `rate` double(9,2) DEFAULT NULL,
  `amount` double(9,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_cart`
--

INSERT INTO `user_cart` (`id`, `user_id`, `product_id`, `qty`, `rate`, `amount`) VALUES
(101, 20, 5, 1, 50.00, 50.00),
(102, 20, 11, 1, 140.00, 140.00),
(103, 20, 20, 1, 130.00, 130.00),
(105, 22, 12, 1, 60.00, 60.00),
(106, 18, 8, 3, 30.00, 90.00),
(107, 18, 9, 2, 80.00, 160.00),
(108, 18, 11, 1, 140.00, 140.00),
(109, 18, 14, 1, 70.00, 70.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_sale_buyers_party` (`user_id`);

--
-- Indexes for table `sale_detail`
--
ALTER TABLE `sale_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK__sale` (`s_id`),
  ADD KEY `FK_sale_detail_bale` (`pro_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_cart`
--
ALTER TABLE `user_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK__users` (`user_id`),
  ADD KEY `FK__product` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `sale_detail`
--
ALTER TABLE `sale_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user_cart`
--
ALTER TABLE `user_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
