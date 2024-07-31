-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 31, 2024 at 03:27 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogpost`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `postId`, `content`, `createdAt`) VALUES
(1, 2, 'fdsfdsff', '2024-07-30 14:00:39'),
(2, 2, 'fsdf', '2024-07-30 14:00:51'),
(3, 2, 'fdfffsf', '2024-07-30 14:00:54'),
(4, 2, 'ffsfffsfsf', '2024-07-30 14:01:10'),
(5, 2, 'fsfffsfsfs', '2024-07-30 14:01:13'),
(6, 2, 'sdffsfsfs', '2024-07-30 14:01:17'),
(7, 2, 'bbvbvb', '2024-07-31 16:06:37');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `content`, `imageUrl`, `userId`, `createdAt`) VALUES
(2, 'test', 'lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller \r\n', 'https://www.orionlifes.com/wp-content/uploads/2022/04/brexodol-tab.jpeg', 1, '2024-05-02 18:59:14'),
(3, 'tests', 'lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller', 'https://media.istockphoto.com/id/1443287362/photo/woman-hiking-in-mountains-on-the-background-of-lysefjorden.jpg?s=1024x1024&w=is&k=20&c=SfJhXF81MvbZ2kAdc5tBYR9C7Xs4tmGY2GuRQr_FhDs=', 1, '2024-05-02 19:01:44'),
(4, 'test1', 'lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller \n', 'https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg', 1, '2024-05-02 19:01:50'),
(5, 'test2', 'lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller \n', 'https://cdn.pixabay.com/photo/2024/05/31/12/16/bridge-8800485_1280.jpg', 1, '2024-05-02 19:01:53'),
(6, 'test3', 'lorem epson dolllerlorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller \n', 'https://cdn.pixabay.com/photo/2024/02/25/13/30/art-8595775_960_720.jpg', 1, '2024-05-02 19:10:30'),
(7, 'test4', 'lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller lorem epson dolller \n', 'https://cdn.pixabay.com/photo/2023/11/27/20/29/autumn-8416137_960_720.png', 1, '2024-05-02 19:10:34');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@test.com', '$2a$10$TqaaATzNRIYltn1WRliKbOIyJHfE7VkHqhDHtcO/Fv2kWCPsgZMvC'),
(2, 'navneet', 'navneet@test.com', '$2a$10$5KTyGFtL/sSvZjhwHTo05uXi2wlGgOQn0pMAYiIgAchy11gOfMh0O');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
