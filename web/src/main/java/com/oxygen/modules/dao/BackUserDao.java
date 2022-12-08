package com.oxygen.modules.dao;

import com.oxygen.modules.model.BackUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * Created with IntelliJ IDEA.
 * Description:
 *
 * @Author: Yanggc
 * Time: 18:18
 */
//@Repository
@Mapper
public interface BackUserDao {

    public BackUser loadByUserName(@Param("username") String username);

    public int save(BackUser backUser);

    public int update(BackUser backUser);

    public int delete(@Param("id") int id);
}
