mkdir

- folderName makes a folder with the folderName
  cd
- moves back to the home directory
  cd ~username
- will put the user in the username's home directory.
  ls
- check whats in the current directory
  cd .
- will leave the user in the same directory they are currently in (i.e. the current directory won't change).
  This can be useful if the user's shell's internal code can't deal with the directory they are in being recreated; running cd will place their shell in the recreated directory.
  cd ..
- moves back one level in the directory
  cd dir (without a /) will put the user in a subdirectory; for example, if they are in /usr, typing cd bin will put them in /usr/bin, while cd /bin puts them in /bin.
  cd .. will move the user up one directory. So, if they are /usr/bin/tmp, cd .. moves them to /usr/bin,
  while cd ../.. moves them to /usr (i.e. up two levels). The user can use this indirection to access subdirectories too.
  So, from /usr/bin/tmp, they can use cd ../../local to go to /usr/local
  cd - will switch the user to the previous directory. For example, if they are in /usr/bin/tmp, and go to /etc, they can type cd - to go back to /usr/bin/tmp. The user can use this to toggle back and forth between two directories without pushd and popd.

touch fileName specify file type.
start fileName you'd like to start running.
open fileName you'd like to open in vs code.

rm fileName
rm removes all files in current directory.
rm -r removes directory

pwd print working directory, tells you you filepath to the folder location you are in.
