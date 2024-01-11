package com.cn.bdth.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@Data
public class NewBingDefaultConfig {

    @Value("${config.newBingCookie}")
    private String newBingCookie;

}