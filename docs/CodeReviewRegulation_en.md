# Code review regulation
*It's very important to spend enough time to code review, because code review can save a lot of your time in the future*

## Motivation
The main purpose of code review is an opportunity to fix a lot of bad code before it will be merged into core branch. Also, code review helps except some obviously bugs and problems

* **Developers motivated to write good code**, because their code any way will be reviewed and bad code never pass code review
* **Share knowledge is very useful for developers**. During the code review process developers can share knowledge so easy, because developer have an ability to read great code or fix some bad code with your own solution and help to another developer
* **Consistence of codebase** allows developers in a team to speak the same language and understand any code within a large project, helps avoid bugs due to non-obvious solutions
* **Code authors find it hard to evaluate their code**, while the reviewer can easily notice complex (bad) code and ask to fix it. Also, the reviewer can notice some bugs or bugs that the implementer missed

## For an author

In order to create a quality and easy-to-check MR, there are a few simple steps that will save the reviewer time

##### 1. Formatting
MR must be formatted according to the following rules:
* A link to the task should be attached
* Brief description of the task and the work done
* Screenshots of UI (if any) before and after changes
* Information about code coverage by tests (screenshot of coverage)
* **MR should not contain more than 20 modified files, otherwise it will be very hard to check it**
* MR must pass all CI steps (tests, linter etc.)
* Information about testing on different devices/browsers (if the task requires it)

##### 2. Communication during the check
If you have doubts about any solution in your MR, you should **must** write about it in the description, 
and duplicate it as a comment for the code line with the questionable solution
If you think your solution is fine, and the reviewer asks you to redo it, 
feel free to find out the reasons and ask them to show you an example of what they want you to do

#### Split Code
If you feel that your MR will be too big, take care beforehand to divide it into several logical MRs. You can do this by adding Feature Flags

Example:
1) Anton is designing a case which adds a lot of new components (30+ file changes)
2) To make things easier for reviewers, Anton creates the first MR with an empty page and adds a feature flag to disable this page in production
3) Anton works and gradually supplies changes to the case pages (e.g., by sections)
4) Anton turns off the feature flag in the final MR

There is also an alternative way to solve this problem. You need to create a main branch with the feature and create small MRs in it. 
When you are done, you need to create MRs from the feature branch into the main branch and attach in the description 
all links to the previous MRs where the current code has been reviewed

## For a reviewer
Your main goal is to confirm that the code meets the quality standards in your project and to catch potential problems or bad code

> Important! Do not check MR that does not pass the CI check. The code in that MR is likely to change and you will have to check it again

##### 1. Look carefully at the description of the MR
It should be clear from the description of the MR what the code in the MR does. If the description is not detailed enough, ask the author of the MR to supplement it. Also take a good look at the code you are going to review.

##### 2. Running the project locally
The first thing you need to do is to run the code on your computer, and make sure that it works. If you have any questions or problems with the executed task, it is necessary to write about it in the general comments to MR. That is necessary for developers to have an additional layer of verification, and bugs were caught before they get to staging.
> This can be quite time consuming, but don't be lazy and always check if the code works locally!

##### 3. General concepts.
Check the code conceptually, location of modules(files), naming, correct use of different entities

##### 4. Implementation details
Check implementation details of business logic

##### 5. Potential error handling
Check for handling of any exceptions that may occur during code execution. All exceptions should be handled

##### 6. Overcomplications in the code
If you see a complex area in the code, ask the developer to try to get rid of it. If you fail to do so, you should mark this code with a comment with a detailed description of the problem and the reason for the overcomplication

##### 7. Tests
Make sure that there are enough tests for the code you have written.
**Coverage should not drop more than 0.5%**.

### How to write comments
Before you write a comment, make sure you understand the problem. Ideally, you should offer a solution that fixes the problem. An example of an ideal comment:

### Approve and merge.
After you've approved the MR, write about it in the comments to the MR. Since we currently have 4 developers on our team, 2 out of 3 approvals will be enough to get MR ready to merge.

## Useful links
* [Google code review best practices](https://google.github.io/eng-practices/review/reviewer/)
* [Longread(eng) about code review from Palantir](https://blog.palantir.com/code-review-best-practices-19e02780015f)
* [Code review - better(rus)](https://habr.com/ru/post/489880/)
* [Opencraft handbook reviewer](https://handbook.opencraft.com/en/latest/roles/#code-reviewer)
* [How to make your code reivewer fall in love with you](https://mtlynch.io/code-review-love/)
