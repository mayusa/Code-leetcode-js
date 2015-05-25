##Solutions for leetcode in JavaScript and how to test a solution code:   
###Step 1. install 3 dependences  
````
npm install -g mocha  
npm install --save-dev mocha    
npm install --save-dev should    
npm install --save-dev supertest   

````
###Step 2. write solution code  
````
var twoSum = function(nums, target) {
	...
};

module.exports = twoSum;
````
  
###Step 3. write test function  
````
var should = require('should');
var twoSum = require('../code/medium/01-twoSum');
describe("Two Sum: ", function() {
  it("Pass Two Sum", function() {
    JSON.stringify(twoSum([2,7,11,15], 9)).should.equal(JSON.stringify([1,2]));
    JSON.stringify(twoSum([-3,1,3,15], 0)).should.equal(JSON.stringify([1,3]));
  });
});

````


###Step 4. test  

> mocha   

------  

##Leet code  

####Title Acceptance Difficulty

---------------------
Easy   

006	ZigZag Conversion  
007	Reverse Integer  
008	String to Integer (atoi)	 
009	Palindrome Number	 
013	Roman to Integer  
014	Longest Common Prefix	 
019	Remove Nth Node From End of List   
020	Valid Parentheses	 
021	Merge Two Sorted Lists	   
026	Remove Duplicates from Sorted Array	  
027	Remove Element	 
028	Implement strStr()	 
036	Valid Sudoku	 
038	Count and Say	  
058	Length of Last Word	   
066	Plus One	 
067	Add Binary	  
070	Climbing Stairs	 
083	Remove Duplicates from Sorted List	 
088	Merge Sorted Array	
100	Same Tree	 
101	Symmetric Tree	
102	Binary Tree Level Order Traversal	 
104	Maximum Depth of Binary Tree	
107	Binary Tree Level Order Traversal II	
110	Balanced Binary Tree	
111	Minimum Depth of Binary Tree	
112	Path Sum	 
118	Pascal's Triangle	 
119	Pascal's Triangle II	
125	Valid Palindrome	
155	Min Stack	 
157	Read N Characters Given Read4  
160	Intersection of Two Linked Lists  
165	Compare Version Numbers	
168	Excel Sheet Column Title	
169	Majority Element	
170	Two Sum III - Data structure design 	
171	Excel Sheet Column Number	 
172	Factorial Trailing Zeroes	 
189	Rotate Array	
190	Reverse Bits	
191	Number of 1 Bits	
198	House Robber	
202	Happy Number	
203	Remove Linked List Elements	 
204	Count Primes	
205	Isomorphic Strings	
206	Reverse Linked List	
217	Contains Duplicate	

--------------------------------  
Medium  

001	Two Sum	 
002	Add Two Numbers	 
003	Longest Substring Without Repeating Characters	 
005	Longest Palindromic Substring	 
011	Container With Most Water	 
012	Integer to Roman	 
015	3Sum	 
016	3Sum Closest	 
017	Letter Combinations of a Phone Number	 
018	4Sum	 
022	Generate Parentheses	 
024	Swap Nodes in Pairs	 
029	Divide Two Integers	 
031	Next Permutation	 
034	Search for a Range	 
035	Search Insert Position	 
039	Combination Sum	 
040	Combination Sum II	
043	Multiply Strings	 
046	Permutations	 
048	Rotate Image	 
049	Anagrams	 
050	Pow(x, n)	 
053	Maximum Subarray	 
054	Spiral Matrix	 
055	Jump Game	 
059	Spiral Matrix II	 
060	Permutation Sequence	 
061	Rotate List	 
062	Unique Paths	 
063	Unique Paths II	 
064	Minimum Path Sum	 
069	Sqrt(x)	 
071	Simplify Path	 
073	Set Matrix Zeroes	 
074	Search a 2D Matrix	 
075	Sort Colors	 
077	Combinations	 
078	Subsets	 
079	Word Search	 
080	Remove Duplicates from Sorted Array II	 
081	Search in Rotated Sorted Array II	 
082	Remove Duplicates from Sorted List II	 
086	Partition List	 
089	Gray Code	 
090	Subsets II	 
091	Decode Ways	 
092	Reverse Linked List II	 
093	Restore IP Addresses	 
094	Binary Tree Inorder Traversal	 
095	Unique Binary Search Trees II	 
096	Unique Binary Search Trees	 
098	Validate Binary Search Tree	 
103	Binary Tree Zigzag Level Order Traversal	 
105	Construct Binary Tree from Preorder and Inorder Traversal	 
106	Construct Binary Tree from Inorder and Postorder Traversal	 
108	Convert Sorted Array to Binary Search Tree	 
109	Convert Sorted List to Binary Search Tree	 
113	Path Sum II	 
114	Flatten Binary Tree to Linked List	 
116	Populating Next Right Pointers in Each Node	 
120	Triangle	 
121	Best Time to Buy and Sell Stock	 
122	Best Time to Buy and Sell Stock II	 
127	Word Ladder	 
129	Sum Root to Leaf Numbers	 
130	Surrounded Regions	 
131	Palindrome Partitioning	 
133	Clone Graph	 
134	Gas Station	 
136	Single Number	 
137	Single Number II	 
139	Word Break	 
141	Linked List Cycle	 
142	Linked List Cycle II	 
143	Reorder List	 
144	Binary Tree Preorder Traversal	 
147	Insertion Sort List	 
148	Sort List	 
150	Evaluate Reverse Polish Notation	 
151	Reverse Words in a String	 
152	Maximum Product Subarray	 
153	Find Minimum in Rotated Sorted Array	 
156	Binary Tree Upside Down 	 
161	One Edit Distance 	 
162	Find Peak Element	 
163	Missing Ranges 	 
166	Fraction to Recurring Decimal	 
167	Two Sum II - Input array is sorted 	 
173	Binary Search Tree Iterator	 
179	Largest Number	 
186	Reverse Words in a String II 	 
187	Repeated DNA Sequences	 
199	Binary Tree Right Side View	 
200	Number of Islands	 
201	Bitwise AND of Numbers Range	 
207	Course Schedule	 
208	Implement Trie (Prefix Tree)	 
209	Minimum Size Subarray Sum	 
210	Course Schedule II	 
211	Add and Search Word - Data structure design  
213	House Robber II	 
215	Kth Largest Element in an Array	 
216	Combination Sum III	  

