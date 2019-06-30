-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2019 at 08:58 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `orderdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `item_name` varchar(45) DEFAULT NULL,
  `item_supplier_name` varchar(45) DEFAULT NULL,
  `item_type` varchar(45) DEFAULT NULL,
  `item_id` varchar(45) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `latitude` varchar(45) DEFAULT NULL,
  `longitude` varchar(45) DEFAULT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `datetime` datetime DEFAULT NULL,
  `status` enum('pending','completed') DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `item_name`, `item_supplier_name`, `item_type`, `item_id`, `location`, `latitude`, `longitude`, `quantity`, `price`, `user_id`, `datetime`, `status`) VALUES
(1, 'nj', 'j', 'jk', 'j', 'j', 'j', 'j', 'jh', NULL, 1, '2019-06-29 00:00:00', 'pending'),
(2, 'nj', 'j', 'jk', 'j', 'j', 'j', 'j', 'jh', NULL, 1, '2019-06-29 00:00:00', 'pending'),
(3, 'nj', 'j', 'jk', 'j', 'j', 'j', 'j', 'jh', NULL, 1, '2019-06-29 00:00:00', 'pending'),
(4, 'nj', 'j', 'jk', 'j', 'j', 'j', 'j', 'jh', 'j', 1, '2019-06-29 00:00:00', 'pending'),
(5, 'sa', 'asd', 'asd', 's', 's', 'sd', 'ds', 'ds', 'ds', 1, '2019-06-29 00:00:00', 'pending'),
(6, 'sajig', 'asd', 'asd', 's', 's', 'sd', 'ds', 'ds', 'ds', 1, '2019-06-29 00:00:00', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `profile_picture` varchar(200) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `deleted` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `profile_picture`, `phone`, `deleted`) VALUES
(1, 'wajid', 'wajid@gmail.com', 'Wajid12345', NULL, '03315487799', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
