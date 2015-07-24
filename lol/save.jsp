<%@page contentType="text/html;charset=utf-8" %>
<%@page import="java.io.*"%>
<%
  String fileName = "test.txt";
  String fileDir = "fileDir";
  String filePath = request.getRealPath(fileDir) + "/";
  filePath += fileName;
  try{
  File f = new File(filePath);
  f.createNewFile();

  FileWriter fw = new FileWriter(filePath);
  String data = "파일에다 아무거나 적습니다.\n이거는 두번째 줄인데 아무거나 적습니다";
  fw.write(data);
  fw.close();
  }catch (IOException e) { 
    System.out.println(e.toString());
  }

%>